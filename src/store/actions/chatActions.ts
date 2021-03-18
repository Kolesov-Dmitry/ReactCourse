import { Action } from 'redux';
import { ChatRoom, MessageList } from '../reducers';
import { ActionType } from '../types';

export interface DeleteChatAction extends Action {
  type: ActionType.DELETE_CHAT;
  payload: {
    chatId: number
  };
};

export interface AddIncomeMessageAction extends Action {
  type: ActionType.ADD_INCOME_MESSAGE;
  payload: {
    chatId: number;
  }
};

export interface ResetIncomeMessagesAction extends Action {
  type: ActionType.RESET_INCOME_MESSAGES;
  payload: {
    chatId: number;
  }
};

export interface FetchChatsAction extends Action {
  type: ActionType.FETCH_CHATS;  
};

export interface FetchChatsSuccessAction extends Action {
  type: ActionType.FETCH_CHATS_SUCCESS;
  payload: {
    chats: ChatRoom[];
  }
};

export interface FetchChatsFailedAction extends Action {
  type: ActionType.FETCH_CHATS_FAILED;  
};


export interface FetchMessagesAction extends Action {
  type: ActionType.FETCH_MESSAGES;  
};

export interface FetchMessagesSuccessAction extends Action {
  type: ActionType.FETCH_MESSAGES_SUCCESS;
  payload: {
    messages: MessageList
  }
};

export interface FetctMessagesFailedAction extends Action {
  type: ActionType.FETCH_MESSAGES_FAILED;  
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

export interface PostMessageFailedAction extends Action {
  type: ActionType.POST_MESSAGE_FAILED;
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

export interface PostChatFailedAction extends Action {
  type: ActionType.POST_CHAT_FAILED;
}

export interface DeleteMessageAction extends Action {
  type: ActionType.DELETE_MESSAGE;
  payload: {
    chatId: number,
    msgId: number
  };
};

export interface DeleteMessageSuccessAction extends Action {
  type: ActionType.DELETE_MESSAGE_SUCCESS;
  payload: {
    chatId: number,
    msgId: number
  };
};

export interface DeleteMessageFailedAction extends Action {
  type: ActionType.DELETE_MESSAGE_FAILED;  
};

export interface DeleteChatAction extends Action {
  type: ActionType.DELETE_CHAT;
  payload: {
    chatId: number
  };
};

export interface DeleteChatSuccessAction extends Action {
  type: ActionType.DELETE_CHAT_SUCCESS;
  payload: {
    chatId: number    
  };
};

export interface DeleteChatFailedAction extends Action {
  type: ActionType.DELETE_CHAT_FAILED;  
};

export type ChatActions = DeleteChatAction                        
                        | AddIncomeMessageAction
                        | ResetIncomeMessagesAction                        
                        
                        | FetchChatsAction
                        | FetchChatsSuccessAction
                        | FetchChatsFailedAction
                        
                        | FetchMessagesAction
                        | FetchMessagesSuccessAction
                        | FetctMessagesFailedAction
                        
                        | PostMessageAction
                        | PostMessageSuccessAction
                        | PostMessageFailedAction
                        
                        | DeleteMessageAction
                        | DeleteMessageSuccessAction
                        | DeleteMessageFailedAction

                        | PostChatAction
                        | PostChatSuccessAction
                        | PostChatFailedAction

                        | DeleteChatAction
                        | DeleteChatSuccessAction
                        | DeleteChatFailedAction;

export const chatActions = {
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
  }),

  fetchChats: (): ChatActions => ({
    type: ActionType.FETCH_CHATS
  }),

  fetchChatsSuccess: (chats: ChatRoom[]): ChatActions => ({
    type: ActionType.FETCH_CHATS_SUCCESS,
    payload: {
      chats
    }
  }),

  fetchChatsFailed: (): ChatActions => ({
    type: ActionType.FETCH_CHATS_FAILED    
  }),

  fetchMessages: (): ChatActions => ({
    type: ActionType.FETCH_MESSAGES
  }),

  fetchMessagesSuccess: (messages: MessageList): ChatActions => ({
    type: ActionType.FETCH_MESSAGES_SUCCESS,
    payload: {
      messages
    }
  }),

  fetchMessagesFailed: (): ChatActions => ({
    type: ActionType.FETCH_MESSAGES_FAILED
  }),

  postMessage: (chatId: number, author: string, text: string): ChatActions => ({
    type: ActionType.POST_MESSAGE,
    payload: {
      chatId,
      author,
      text
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

  // Удаляет cообщение mgsId из чата c chatId
  deleteMessageSuccess: (chatId: number, msgId: number): ChatActions => ({
    type: ActionType.DELETE_MESSAGE_SUCCESS,
    payload: {
      chatId,
      msgId
    }
  }),

  // Удаляет cообщение mgsId из чата c chatId
  deleteMessageFailed: (): ChatActions => ({
    type: ActionType.DELETE_MESSAGE_FAILED    
  }),

  // Отправляет сообщение в чат с указанным Id
  postMessageSuccess: (chatId: number, msgId: number, author: string, text: string): ChatActions => ({  
    type: ActionType.POST_MESSAGE_SUCCESS,
    payload: {
      chatId,
      msgId,
      author,
      text
    }  
  }),

  postMessageFailed: (): ChatActions => ({
    type: ActionType.POST_MESSAGE_FAILED
  }),

  postChat: (title: string): ChatActions => ({
    type: ActionType.POST_CHAT,
    payload: {
      title
    }
  }),

  // Добавляет новый чат
  postChatSuccess: (chatId: number, title: string): ChatActions => ({  
    type: ActionType.POST_CHAT_SUCCESS,
    payload: {
      chatId,
      title
    }  
  }),

  postChatFailed: (): ChatActions => ({
    type: ActionType.POST_CHAT_FAILED
  }),

  // Удаляет чат с указанным chatId
  deleteChat: (chatId: number): ChatActions => ({
    type: ActionType.DELETE_CHAT,
    payload: {
      chatId
    }
  }),

  // Удаляет чат с указанным chatId
  deleteChatSuccess: (chatId: number): ChatActions => ({
    type: ActionType.DELETE_CHAT_SUCCESS,
    payload: {
      chatId
    }
  }),

  deleteChatFailed: (): ChatActions => ({
    type: ActionType.DELETE_CHAT_FAILED,
  }),  
}
