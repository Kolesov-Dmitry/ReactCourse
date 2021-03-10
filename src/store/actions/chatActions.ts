import { ActionType } from '../types';

type SendMessageAction = {
  type: ActionType.SEND_MESSAGE;
  payload: {
    chatId: number;
    author: string;
    text: string;
  };
};

type AddChatAction = {
  type: ActionType.ADD_CHAT;
  payload: {
    title: string
  };
};

export type ChatActions = SendMessageAction | AddChatAction

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
  })
}
