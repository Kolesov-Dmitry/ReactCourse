import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { StoreData } from './types';
import { chatReducer, profileReducer, ChatStoreData } from './reducers';
import { middlewares } from './middleware';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Попила у меня крови эта штука... 
// Пока допёр, что redux-persis не умеет работать с ES6 Map....
const chatsTransform = createTransform(
  // Кастую Map в Array чтобы потом положить в LocalStorage
  (inboundState: ChatStoreData, key) => ({ ...inboundState, chats: Array.from(inboundState.chats) }),
  
  // Получаю Array из LocalStorage и кастую в Map
  (outboundState, key) => ({ ...outboundState, chats: new Map(outboundState.chats) }),
  
  // говорю, что transform необходимо применять к чатам
  { whitelist: ['chat'] }
);

const persistConfig = {
  key: 'roboChat',
  storage,  
  whitelist: ['chat', 'profile'],
  transforms: [chatsTransform],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory<any>();

const rootReducer = combineReducers<StoreData>({ 
  chat:    chatReducer,
  profile: profileReducer,
  router:  connectRouter(history)
});

export const store = createStore(  
  persistReducer<StoreData>(persistConfig, rootReducer),  
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history), 
      ...middlewares
    )
  )
);

export const persistor = persistStore(store);