import { Action } from 'redux';
import { ActionType } from '../types';

export interface SendMessageAction extends Action  {
  type: ActionType.SEND_MESSAGE;
  payload: {
    chatId: number;
    author: string;
    text: string;
  };
};

export interface AddChatAction extends Action {
  type: ActionType.ADD_CHAT;
  payload: {
    title: string
  };
};

export interface DeleteChatAction extends Action {
  type: ActionType.DELETE_CHAT;
  payload: {
    chatId: number
  };
};

export interface DeleteMessageAction extends Action {
  type: ActionType.DELETE_MESSAGE;
  payload: {
    chatId: number,
    msgId: number
  };
};

export interface AddIncomeMessage extends Action {
  type: ActionType.ADD_INCOME_MESSAGE;
  payload: {
    chatId: number;
  }
};

export interface ResetIncomeMessages extends Action {
  type: ActionType.RESET_INCOME_MESSAGES;
  payload: {
    chatId: number;
  }
};

export type ChatActions = SendMessageAction 
                        | AddChatAction 
                        | DeleteChatAction
                        | DeleteMessageAction
                        | AddIncomeMessage
                        | ResetIncomeMessages;

export const chatActions = {
  // Добавляет новый чат
  addChat: (title: string): ChatActions => ({  
    type: ActionType.ADD_CHAT,
    payload: {
      title
    }  
  }),
  
  // Отправляет сообщение в чат с указанным Id
  sendMessage: (chatId: number, author: string, text: string): ChatActions => ({  
    type: ActionType.SEND_MESSAGE,
    payload: {
      chatId,
      author,
      text
    }  
  }),

  // Удаляет чат с указанным chatId
  deleteChat: (chatId: number): ChatActions => ({
    type: ActionType.DELETE_CHAT,
    payload: {
      chatId
    }
  }),

  // Удаляет cообщение mgsId из чата c chatId
  deleteMessage: (chatId: number, msgId: number): ChatActions => ({
    type: ActionType.DELETE_MESSAGE,
    payload: {
      chatId,
      msgId
    }
  }),

  // Увеличивает счётчик непрочитанных сообщений 
  addIncomeMessage: (chatId: number): ChatActions => ({
    type: ActionType.ADD_INCOME_MESSAGE,
    payload: {
      chatId
    }
  }),

  // Сбрасывает счётчик непрочитанных сообщений 
  resetIncomeMessages: (chatId: number): ChatActions => ({
    type: ActionType.RESET_INCOME_MESSAGES,
    payload: {
      chatId
    }
  })
}
