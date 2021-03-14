import { Middleware } from 'redux';
import { StoreData, ActionType } from '../types';
import { SendMessageAction, chatActions } from '../actions/chatActions';

const answers: string[] = [
  'Нормально!',
  'Вроде ничего',
  'Бывало и получше',
  'Так я тебе и сказал...',
];

const pickTheAnswer = (): string => {
  const idx: number = Math.floor(Math.random() * answers.length);

  return answers[idx];
}

export const messageMiddleware: Middleware<{}, StoreData> = (store) => (next) => (action) => {
  switch (action.type) {
    case ActionType.SEND_MESSAGE: {
      const state = store.getState();
      const msgAction = action as SendMessageAction;

      if (msgAction.payload.author === state.profile.userName) {      
        setTimeout(() => {
          store.dispatch(
            chatActions.sendMessage(
              msgAction.payload.chatId, 
              'Robot', 
              pickTheAnswer()
            )
          );
        }, 5000);
      }
    }
  }

  return next(action);
}