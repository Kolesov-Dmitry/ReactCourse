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

export const history = createBrowserHistory<any>();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

// Данные хранящиеся в store
export type StoreData = {
  chat: ChatStoreData;        // Список чатов и собщений
  profile: ProfileStoreData;  // Данные профиля
  router: RouterState<any>;   // Роутер
};

// корневой Reducer
const rootReducer = combineReducers<StoreData>({ 
  chat:    chatReducer,
  profile: profileReducer,
  router:  connectRouter(history)
});

// корневой Middleware
const rootMiddleware = composeEnhancers(
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
    ...middlewares
  )
);

// Store приложения
export const store = createStore(  
  rootReducer,  
  rootMiddleware
);

sagaMiddleware.run(chatSaga);