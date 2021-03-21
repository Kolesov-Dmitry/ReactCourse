import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { chatReducer, profileReducer, ChatStoreData, ProfileStoreData } from './reducers';
import { middlewares } from './middleware';
import { chatSaga } from './sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory<any>();

export type StoreData = {
  chat: ChatStoreData;
  profile: ProfileStoreData;
  router: RouterState<any>;
};


const rootReducer = combineReducers<StoreData>({ 
  chat:    chatReducer,
  profile: profileReducer,
  router:  connectRouter(history)
});

const sagaMiddleware = createSagaMiddleware();

const rootMiddleware = composeEnhancers(
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
    ...middlewares
  )
);

export const store = createStore(  
  rootReducer,  
  rootMiddleware
);

sagaMiddleware.run(chatSaga);