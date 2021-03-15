import { RouterState } from 'connected-react-router';

import { ChatStoreData, ProfileStoreData } from './reducers';

// Типы Action'ов
export enum ActionType {
  ADD_CHAT = '@@chat/ADD_CHAT',
  SEND_MESSAGE = '@@chat/SEND_MESSAGE',

  DELETE_CHAT = '@@chat/DELETE_CHAT',
  DELETE_MESSAGE = '@@chat/DELETE_MESSAGE',
  
  ADD_INCOME_MESSAGE = '@@chat/ADD_INCOME_MESSAGE',
  RESET_INCOME_MESSAGES = '@@chat/RESET_INCOME_MESSAGES',


  SET_USER_NAME = '@@profile/SET_USER_NAME',
};

// Тип данных, описывающий одно сообщение
export type Message = {
  id:     number  // Id сообщения
  author: string  // Автор сообщения
  text:   string  // Текст сообщения  
};

// Тип данных описывающий чат-комнату
export type ChatRoom = {
  title: string        // Имя комнаты
  messages: Message[]  // Сообщения
  income: number;      // Количество непрочитанных сообщений
};

export type StoreData = {
  chat: ChatStoreData;
  profile: ProfileStoreData;
  router: RouterState<any>;
};
