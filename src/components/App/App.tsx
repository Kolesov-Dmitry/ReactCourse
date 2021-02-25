import React from 'react';
import { FC, useState } from 'react';

import { MessageField } from '../Messages';
import { AddMessageFunc, MessageData } from '../../data';

import './App.css';

export const App: FC<{}> = () => {
  // Создаю состояние компонента, содержащее массив сообщений.
  // Вызов setMessages рективно изменит содержимое messages,
  // что приведёт к перерисовке компонента.
  const [messages, setMessages] = useState<MessageData[]>([]);

  // Функция добавляет новое сообщение
  // Потом я её пробрасываю как callback в компонент MessageField
  const appendMessage: AddMessageFunc = (author: string, text: string, income: boolean) => {
    setMessages([
      ...messages, 
      {
        author,
        text,
        income,
      } as MessageData
    ]);
  }

  // Обработчик нажатий на кнопку "Добавить"
  // Помещает новое сообщенгие в массив сообщений
  const onAppendBtnClicked = () => {
    appendMessage('User', 'Как дела?', false);
  };

  return (
    <div 
      id='app' 
      className='container'
    >      
      <button
        id='appendBtn'
        className='btn'
        onClick={ onAppendBtnClicked }>Добавить</button>
      <MessageField 
        messages={ messages } 
        appendMessage={ appendMessage }
      />
    </div>
  );
};