import { Message, ChatRoom, ActionType } from '../types';
import { ChatActions } from '../actions/chatActions';

// Данные чатов
export type ChatStoreData = {
  chats: Map<number, ChatRoom>
}

const initialState: ChatStoreData = {
 chats: new Map<number, ChatRoom>().set(1, { title: 'Комната 1', messages: [] as Message[], income: 0 })
};

export const chatReducer = (state = initialState, action: ChatActions): ChatStoreData => {
  switch (action.type) {
    case ActionType.SEND_MESSAGE: {
      // Получаю комнату по ID
      const chatRoom = state.chats.get(action.payload.chatId);
      if (chatRoom === undefined) return state;
      
      // Записываю новое сообщение      
      chatRoom.messages = [...chatRoom.messages, {
        id: Date.now(),
        author: action.payload.author,
        text: action.payload.text,
      } as Message];
    
      // Обновляю state
      return { 
        chats: new Map<number, ChatRoom>(state.chats.set(action.payload.chatId, chatRoom)) 
      };
    }
    
    case ActionType.ADD_CHAT: {
      const chatId = state.chats.size + 1;
      
      // Добавляю новую комнату
      const chats = new Map<number, ChatRoom>(
        state.chats.set(chatId, {
          title: action.payload.title,
          messages: [],
          income: 0,
        } as ChatRoom)
      );

      // Обновляю state
      return { chats };
    }

    case ActionType.DELETE_CHAT: {
      if (state.chats.has(action.payload.chatId) == false) return state;

      const chats = new Map<number, ChatRoom>(state.chats);
      chats.delete(action.payload.chatId);

      return { chats };
    }

    case ActionType.DELETE_MESSAGE: {
      const chatRoom = state.chats.get(action.payload.chatId);
      if (chatRoom === undefined) return state;

      // Удаляю сообщение
      chatRoom.messages = chatRoom.messages.filter((msg: Message) => ( msg.id != action.payload.msgId ));

      // Обновляю state
      return { 
        chats: new Map<number, ChatRoom>(state.chats.set(action.payload.chatId, chatRoom))
      };
    }

    case ActionType.ADD_INCOME_MESSAGE: {
      const chatRoom = state.chats.get(action.payload.chatId);
      if (chatRoom === undefined) return state;

      chatRoom.income++;

      // Обновляю state
      return { 
        chats: new Map<number, ChatRoom>(state.chats.set(action.payload.chatId, chatRoom)) 
      };
    }

    case ActionType.RESET_INCOME_MESSAGES: {
      
      const chatRoom = state.chats.get(action.payload.chatId);
      if (chatRoom === undefined) return state;

      chatRoom.income = 0;

      // Обновляю state
      return { 
        chats: new Map<number, ChatRoom>(state.chats.set(action.payload.chatId, chatRoom)) 
      };
    }

    // Если пришёл левый action
    default:
      return state;
  }  
}
