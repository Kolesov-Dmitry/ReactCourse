import { ActionType } from '../types';
import { ChatActions } from '../actions/chatActions';

// Тип данных, описывающий одно сообщение
export type Message = {
  id:     number;  // Id сообщения
  author: string;  // Автор сообщения
  text:   string;  // Текст сообщения  
};

// Список сообщений по чатам
export type MessageList = {
  [chatId: string]: Message[];
};

// Тип данных описывающий чат-комнату
export type ChatRoom = {
  chatId:   number;  // Id чата
  title:    string;  // Имя комнаты  
  income:   number;  // Количество непрочитанных сообщений
};

// Данные чатов
export type ChatStoreData = {
  chats: ChatRoom[];
  messages: MessageList;
};

const initialState: ChatStoreData = {
  chats: [{ chatId: 1, title: 'Комната 1', income: 0 }],
  messages: { "1": [] as Message[] },
};

// вытаскивает Чат по chatId
const chatIndexById = (chats: ChatRoom[], chatId: number): number => chats.findIndex(chat => chat.chatId == chatId);  

const handleDeleteChatSuccess = (state: ChatStoreData, chatId: number): ChatStoreData => {
  // Проверяю наличие чата
  if (chatIndexById(state.chats, chatId) == -1) return state;

  const chats = state.chats.filter(chat => chat.chatId != chatId);
  const messages = { ...state.messages };  
  delete messages[chatId.toString()];
  
  return { chats, messages };
}

const handleDeleteMessageSuccess = (state: ChatStoreData, chatId: number, msgId: number): ChatStoreData => {
  const key = chatId.toString();  
  if (key in state.messages === false) return state;

  // Удаляю сообщение  
  const messages = { ...state.messages }; 
  messages[key] = state.messages[key].filter((msg: Message) => ( msg.id != msgId ));

  return { 
    chats: state.chats,
    messages: messages
  };
}

const handleAddIncomeMessage = (state: ChatStoreData, chatId: number): ChatStoreData => {  
  // Проверяю наличие чата
  const idx = chatIndexById(state.chats, chatId);
  if (idx == -1) return state;
  
  const chats = [...state.chats];
  chats[idx].income++;

  // Обновляю state
  return { 
    chats: chats,
    messages: state.messages
  };
}

const handleResetIncomeMessage = (state: ChatStoreData, chatId: number): ChatStoreData => {
  // Проверяю наличие чата
  const idx = chatIndexById(state.chats, chatId);
  if (idx == -1) return state;
  
  const chats = [...state.chats];
  chats[idx].income = 0

  // Обновляю state
  return { 
    chats: chats,
    messages: state.messages
  };
}

const handleFetchChatsSuccess = (state: ChatStoreData, chats: ChatRoom[]): ChatStoreData => {
  // Обновляю state
  return { 
    chats: chats,
    messages: state.messages
  };
}

const handleFetchMessagesSuccess = (state: ChatStoreData, messages: MessageList): ChatStoreData => {
  // Обновляю state
  return { 
    chats: state.chats,
    messages: messages
  };
}

const handlePostMessageSuccess = (state: ChatStoreData, payload: { chatId: number, msgId: number, author: string, text: string }): ChatStoreData => {    
  // Проверяю наличие чата
  if (chatIndexById(state.chats, payload.chatId) == -1) return state;
  
  // Записываю новое сообщение  
  const key = payload.chatId.toString();

  const messages = { ...state.messages };
  messages[key] = [
    ...state.messages[payload.chatId.toString()], 
    {
      id: payload.msgId,
      author: payload.author,
      text: payload.text,
    }
  ];
  
  console.log(JSON.stringify(messages));

  return { 
    chats: state.chats,
    messages: messages
  };
}

const handlePostChatSuccess = (state: ChatStoreData, chatId: number, title: string): ChatStoreData => {        
  // Добавляю новую комнату
  const chats = [
    ...state.chats,
    {
      chatId: chatId,
      title: title,      
      income: 0,
    }
  ];

  const key = chatId.toString();
  const messages = { ...state.messages };
  messages[key] = [] as Message[];
    
  return { chats, messages };
}

export const chatReducer = (state = initialState, action: ChatActions): ChatStoreData => {
  switch (action.type) {
    case ActionType.ADD_INCOME_MESSAGE:     return handleAddIncomeMessage(state, action.payload.chatId);
    case ActionType.RESET_INCOME_MESSAGES:  return handleResetIncomeMessage(state, action.payload.chatId);
    case ActionType.FETCH_CHATS_SUCCESS:    return handleFetchChatsSuccess(state, action.payload.chats);
    case ActionType.FETCH_MESSAGES_SUCCESS: return handleFetchMessagesSuccess(state, action.payload.messages);
    case ActionType.POST_MESSAGE_SUCCESS:   return handlePostMessageSuccess(state, action.payload);
    case ActionType.POST_CHAT_SUCCESS:      return handlePostChatSuccess(state, action.payload.chatId, action.payload.title);
    case ActionType.DELETE_MESSAGE_SUCCESS: return handleDeleteMessageSuccess(state, action.payload.chatId, action.payload.msgId);
    case ActionType.DELETE_CHAT_SUCCESS:    return handleDeleteChatSuccess(state, action.payload.chatId);
      
    // Если пришёл левый action
    default:
      return state;
  }  
}
