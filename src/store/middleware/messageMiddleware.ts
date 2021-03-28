import { Middleware } from 'redux';
import { ActionType } from '../types';
import { chatActions, PostMessageSuccessAction } from '../actions/chatActions';
import { StoreData } from '../store';

// Список вариантов ответа робота
const answers: string[] = [
  'Нормально!',
  'Вроде ничего',
  'Бывало и получше',
  'Так я тебе и сказал...',
];

/**
 * Выбирает случайны ответ из списка
 */
const pickTheAnswer = (): string => {
  const idx: number = Math.floor(Math.random() * answers.length);

  return answers[idx];
}

export const messageMiddleware: Middleware<{}, StoreData> = (store) => (next) => (action) => {
  switch (action.type) {
    // Перехватываю отправку сообщения
    case ActionType.POST_MESSAGE_SUCCESS: {
      const state = store.getState();
      const msgAction = action as PostMessageSuccessAction;

      // Если сообщение отправил пользователь, 
      // то робот на него отвечает
      if (msgAction.payload.author === state.profile.userName) {      
        setTimeout(() => {
          store.dispatch(
            chatActions.postMessage(
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