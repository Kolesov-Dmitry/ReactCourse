import { Middleware } from 'redux';
import { LOCATION_CHANGE } from 'connected-react-router';

import { StoreData, ActionType } from '../types';
import { SendMessageAction, chatActions } from '../actions/chatActions';

// Вытаскивает chatId из route /chat/<chatId>
const exstractChatId = (path: string): number => {
  const pathParts = path.split('/').filter(item => item);
  return (pathParts.length == 2 && pathParts[0] === 'chat')
    ? Number.parseInt(pathParts[1])
    : 0;
}

export const incomingMiddleware: Middleware<{}, StoreData> = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case ActionType.SEND_MESSAGE: {      
      const msgAction = action as SendMessageAction;

      const currentChatId = exstractChatId(state.router.location.pathname);
      
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