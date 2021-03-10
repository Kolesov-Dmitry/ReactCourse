import { createStore, combineReducers, compose } from 'redux';

import { chatReducer, profileReducer, ChatStoreData, ProfileStoreData } from './reducers';

export type StoreData = {
  chat: ChatStoreData;
  profile: ProfileStoreData;
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({ 
    chat:    chatReducer,
    profile: profileReducer
  }),
  composeEnhancers()
);