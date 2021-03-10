import { Message, ChatRoom, ActionType } from '../types';
import { ChatActions } from '../actions/chatActions';

// Данные чатов
export type ChatStoreData = {
  chats: Map<number, ChatRoom>
}

const initialState: ChatStoreData = {
 chats: new Map<number, ChatRoom>().set(1, {title: 'Комната 1', messages: [] as Message[]})
};

export const chatReducer = (state = initialState, action: ChatActions): ChatStoreData => {
  switch (action.type) {
    case ActionType.SEND_MESSAGE:
      // Получаю комнату по ID
      const chatRoom = state.chats.get(action.payload.chatId);
      if (chatRoom === undefined) return state;
      
      // Записываю новое сообщение
      // Знаю, что использовать Date.now(), внутри редьюсера, плохая тема, 
      // но как делать правильно не знаю... (((
      // Upd: узнал как правильно, но выделять целый middleware только чтоб в нём получить id сообщения... ну такое...
      // перенесу потом, когда дойдём до работы с backend
      chatRoom.messages = [...chatRoom.messages, {
        id: Date.now(),
        author: action.payload.author,
        text: action.payload.text,
      } as Message];
    
      // Обновляю state
      return { 
        chats: new Map<number, ChatRoom>(state.chats.set(action.payload.chatId, chatRoom)) 
      };
    
    case ActionType.ADD_CHAT:
      const chatId = state.chats.size + 1;
      
      // Добавляю новую комнату
      const updatedChats = new Map<number, ChatRoom>(
        state.chats.set(chatId, {
          title: action.payload.title,
          messages: []
        } as ChatRoom)
      );

      // Обновляю state
      return { chats: updatedChats };

    // Если пришёл левый action
    default:
      return state;
  }  
}