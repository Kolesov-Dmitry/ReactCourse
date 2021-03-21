import { Action } from 'redux';
import { ChatRoom, MessageList } from '../reducers';
import { ActionType } from '../types';

export interface FetchChatsSuccessAction extends Action {
  type: ActionType.FETCH_CHATS_SUCCESS;
  payload: {
    chats: ChatRoom[];
  }
};

export interface FetchMessagesSuccessAction extends Action {
  type: ActionType.FETCH_MESSAGES_SUCCESS;
  payload: {
    messages: MessageList
  }
};

export interface PostMessageAction extends Action {
  type: ActionType.POST_MESSAGE;  
  payload: {    
    chatId: number;
    author: string;
    text: string;
  };
}

export interface PostMessageSuccessAction extends Action {
  type: ActionType.POST_MESSAGE_SUCCESS;  
  payload: {
    chatId: number;
    msgId: number
    author: string;
    text: string;
  };
}

export interface PostChatAction extends Action {
  type: ActionType.POST_CHAT;  
  payload: {        
    title: string;
  };
}

export interface PostChatSuccessAction extends Action {
  type: ActionType.POST_CHAT_SUCCESS;  
  payload: {
    chatId: number;    
    title: string;
  };
}

export interface DeleteMessageAction extends Action {
  type: ActionType.DELETE_MESSAGE | ActionType.DELETE_MESSAGE_SUCCESS;
  payload: {
    chatId: number,
    msgId: number
  };
};

export interface ChatIdAction extends Action {
  type: ActionType.DELETE_CHAT_SUCCESS 
      | ActionType.DELETE_CHAT 
      | ActionType.RESET_INCOME_MESSAGES 
      | ActionType.ADD_INCOME_MESSAGE 
      | ActionType.DELETE_CHAT;

  payload: {
    chatId: number    
  };
};

export interface ChatEmptyAction extends Action {
  type: ActionType.FETCH_CHATS
      | ActionType.DELETE_CHAT_FAILED 
      | ActionType.DELETE_MESSAGE_FAILED 
      | ActionType.POST_CHAT_FAILED 
      | ActionType.POST_MESSAGE_FAILED 
      | ActionType.FETCH_MESSAGES_FAILED 
      | ActionType.FETCH_MESSAGES 
      | ActionType.FETCH_CHATS_FAILED; 
};

export type ChatAction = FetchChatsSuccessAction                        
                       | FetchMessagesSuccessAction                                                
                       | PostMessageAction
                       | PostMessageSuccessAction                        
                       | DeleteMessageAction                        
                       | PostChatAction
                       | PostChatSuccessAction                        
                       | ChatIdAction
                       | ChatEmptyAction;

export const chatActions = {
  /**
   * Возвращает Action на увеличение счётчика непрочитанных сообщений 
   * @param {number} chatId ID чата в котором будеи изменён счётчик непрочитанных сообщений
   * */ 
  addIncomeMessage: (chatId: number): ChatAction => ({
    type: ActionType.ADD_INCOME_MESSAGE,
    payload: {
      chatId
    }
  }),
  
  /**
   * Возвращает Action на сброс счётчика непрочитанных сообщений 
   * @param {number} chatId ID чата в котором будеи сброшен счётчик непрочитанных сообщений
   * */ 
  resetIncomeMessages: (chatId: number): ChatAction => ({
    type: ActionType.RESET_INCOME_MESSAGES,
    payload: {
      chatId
    }
  }),

  /**
   * Возвращает Action на загрузку списка чатов с сервера    
   * */ 
  fetchChats: (): ChatAction => ({
    type: ActionType.FETCH_CHATS
  }),

  /**
   * Возвращает Action на запись в store, загруженного с сервера, списка чатов 
   * @param {ChatRoom[]} chats Список чатов
   * */ 
  fetchChatsSuccess: (chats: ChatRoom[]): ChatAction => ({
    type: ActionType.FETCH_CHATS_SUCCESS,
    payload: {
      chats
    }
  }),

  /**
   * Возвращает Action-заглушку при возникновении ошибки загрузки с сервера списка чатов     
   * */ 
  fetchChatsFailed: (): ChatAction => ({
    type: ActionType.FETCH_CHATS_FAILED    
  }),

  /**
   * Возвращает Action на загрузку сообщений с сервера    
   * */ 
  fetchMessages: (): ChatAction => ({
    type: ActionType.FETCH_MESSAGES
  }),

  /**
   * Возвращает Action на запись в store, загруженного с сервера, списка сообщений 
   * @param {MessageList} messages Список сообщений
   * */ 
  fetchMessagesSuccess: (messages: MessageList): ChatAction => ({
    type: ActionType.FETCH_MESSAGES_SUCCESS,
    payload: {
      messages
    }
  }),

  /**
   * Возвращает Action-заглушку при возникновении ошибки загрузки с сервера списка сообщений     
   * */ 
  fetchMessagesFailed: (): ChatAction => ({
    type: ActionType.FETCH_MESSAGES_FAILED
  }),

  /**
   * Возвращает Action на отправку сообщения на сервер
   * @param {number} chatId ID чата
   * @param {string} author Автор сообщения
   * @param {string} text Текст сообщения
   * */ 
  postMessage: (chatId: number, author: string, text: string): ChatAction => ({
    type: ActionType.POST_MESSAGE,
    payload: {
      chatId,
      author,
      text
    }
  }),

  /**
   * Возвращает Action на запись сообщения в store, после успешной записи на сервер
   * @param {number} chatId ID чата
   * @param {number} msgId ID сообщения
   * @param {string} author Автор сообщения
   * @param {string} text Текст сообщения
   * */ 
  postMessageSuccess: (chatId: number, msgId: number, author: string, text: string): ChatAction => ({  
    type: ActionType.POST_MESSAGE_SUCCESS,
    payload: {
      chatId,
      msgId,
      author,
      text
    }  
  }),

  /**
   * Возвращает Action-заглушку при возникновении ошибки записи сообщения на сервер
   * */ 
  postMessageFailed: (): ChatAction => ({
    type: ActionType.POST_MESSAGE_FAILED
  }),

  /**
   * Возвращает Action на удаление сообщения из чата на сервер
   * @param {number} chatId ID чата
   * @param {number} msgId ID сообщения   
   * */ 
  deleteMessage: (chatId: number, msgId: number): ChatAction => ({
    type: ActionType.DELETE_MESSAGE,
    payload: {
      chatId,
      msgId
    }
  }),

  /**
   * Возвращает Action на удаление сообщения из store, после успешного удаления на сервере
   * @param {number} chatId ID чата
   * @param {number} msgId ID сообщения   
   * */ 
  deleteMessageSuccess: (chatId: number, msgId: number): ChatAction => ({
    type: ActionType.DELETE_MESSAGE_SUCCESS,
    payload: {
      chatId,
      msgId
    }
  }),

  /**
   * Возвращает Action-заглушку при возникновении ошибки удаления сообщения на сервере
   * */ 
  deleteMessageFailed: (): ChatAction => ({
    type: ActionType.DELETE_MESSAGE_FAILED    
  }),

  /**
   * Возвращает Action на создание нового чата на сервере
   * @param {string} title Заголовок чата   
   * */ 
  postChat: (title: string): ChatAction => ({
    type: ActionType.POST_CHAT,
    payload: {
      title
    }
  }),

  /**
   * Возвращает Action на создание нового чата в store
   * @param {number} chatId ID чата
   * @param {string} title Заголовок чата
   * */ 
  postChatSuccess: (chatId: number, title: string): ChatAction => ({  
    type: ActionType.POST_CHAT_SUCCESS,
    payload: {
      chatId,
      title
    }  
  }),

  /**
   * Возвращает Action-заглушку при возникновении ошибки создания нового чата на сервере
   * */ 
  postChatFailed: (): ChatAction => ({
    type: ActionType.POST_CHAT_FAILED
  }),

  /**
   * Возвращает Action на удаление чата на сервере
   * @param {number} chatId ID чата   
   * */ 
  deleteChat: (chatId: number): ChatAction => ({
    type: ActionType.DELETE_CHAT,
    payload: {
      chatId
    }
  }),

  /**
   * Возвращает Action на удаление чата из store
   * @param {number} chatId ID чата   
   * */ 
  deleteChatSuccess: (chatId: number): ChatAction => ({
    type: ActionType.DELETE_CHAT_SUCCESS,
    payload: {
      chatId
    }
  }),

  /**
   * Возвращает Action-заглушку при возникновении ошибки удаления чата на сервере
   * */ 
  deleteChatFailed: (): ChatAction => ({
    type: ActionType.DELETE_CHAT_FAILED,
  }),  
}
