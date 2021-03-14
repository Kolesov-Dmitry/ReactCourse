import { Message, StoreData } from "../types";

type ChatList = {
  chatId: number;
  title: string;
  income: number;
};

export const chatSelector = {
  // Возвращает список чатов с ID
  chats: (store: StoreData): ChatList[] => {
    return Array.from(store.chat.chats).map(([ chatId, chatRoom ]) => (
      { 
        chatId: chatId, 
        title: chatRoom.title,
        income: chatRoom.income
      })
    )
  },

  // Возвращает массив сообщений по ID чата
  messages: (chatId: number) => (store: StoreData): Message[] => {
    return store.chat.chats.get(chatId)?.messages || [];
  }
};