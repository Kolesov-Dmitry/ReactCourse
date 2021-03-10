// Типы Action'ов
export enum ActionType {
  ADD_CHAT = '@@chat/ADD_CHAT',
  SEND_MESSAGE = '@@chat/SEND_MESSAGE'
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
};
