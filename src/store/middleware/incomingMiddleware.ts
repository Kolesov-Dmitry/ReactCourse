import { Middleware } from 'redux';
import { LOCATION_CHANGE } from 'connected-react-router';

import { ActionType } from '../types';
import { chatActions, PostMessageSuccessAction } from '../actions/chatActions';
import { StoreData } from '../store';

/**
 * Вытаскивает chatId из route
 * @param path Путь в формате /chat/<chatId>
 * @returns В случае успеха возвращает chatId, иначе 0
 */
const exstractChatId = (path: string): number => {
  const pathParts = path.split('/').filter(item => item);
  return (pathParts.length == 2 && pathParts[0] === 'chat')
    ? Number.parseInt(pathParts[1])
    : 0;
}

export const incomingMiddleware: Middleware<{}, StoreData> = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case ActionType.POST_MESSAGE_SUCCESS: {      
      const msgAction     = action as PostMessageSuccessAction;
      const currentChatId = exstractChatId(state.router.location.pathname);
      
      // Если пользователь находится не в том чате, в который пришло сообщение
      // увеличиваю в чате счётчик входящих сообщений
      if (currentChatId !== msgAction.payload.chatId) {
        store.dispatch(
          chatActions.addIncomeMessage(msgAction.payload.chatId)
        );
      }
    }

    case LOCATION_CHANGE: {      
      const chatId = exstractChatId(state.router.location.pathname);
      store.dispatch(
        chatActions.resetIncomeMessages(chatId)
      );
    }

  }

  return next(action);
}