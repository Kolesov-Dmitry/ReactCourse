import { StoreData } from "../store";
import { Message } from "../types";

type ChatList = {
  chatId: number;
  title: string;
};

export const chatSelector = {
  // Возвращает список чатов с ID
  chats: (store: StoreData): ChatList[] => {
    return Array.from(store.chat.chats).map(([ chatId, chatRoom ]) => (
      { 
        chatId: chatId, 
        title: chatRoom.title 
      })
    )
  },

  // Возвращает массив сообщений по ID чата
  messages: (chatId: number) => (store: StoreData): Message[] => {
    return store.chat.chats.get(chatId)?.messages || [];
  }
};