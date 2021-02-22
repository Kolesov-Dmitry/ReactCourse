import React from 'react';
import { FC, useState } from 'react';

import { Messages } from '../Messages';

import './App.css';

export const App: FC<{}> = () => {
  // Создаю состояние компонента, содержащее массив сообщений.
  // Вызов setMessages рективно изменит содержимое messages,
  // что приведёт к перерисовке компонента.
  const [messages, setMessages] = useState<string[]>(['First', 'Second']);

  // Обработчик нажатий на кнопку "Добавить"
  // Помещает новое сообщенгие в массив сообщений
  const onAppendBtnClicked = () => {
    const msgs = [...messages, 'Нормально'];
    setMessages(msgs);
  };

  return (
    <div 
      id='app' 
      className='container'
    >
      <h2>Hello from React</h2>
      <button
        id='appendBtn'
        className='btn'
        onClick={ onAppendBtnClicked }>Добавить</button>
      <Messages messages={ messages } />
    </div>
  );
};