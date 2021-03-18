import { Message, ChatRoom } from "../reducers";
import { StoreData } from "../store";

export const chatSelector = {
  // Возвращает список чатов с ID
  chats: (store: StoreData): ChatRoom[] => {
    return store.chat.chats;
  },

  // Возвращает массив сообщений по ID чата
  messages: (chatId: number) => (store: StoreData): Message[] => {
    const key = chatId.toString();
    return (key in store.chat.messages)
      ? store.chat.messages[key]
      : [];
  }
};