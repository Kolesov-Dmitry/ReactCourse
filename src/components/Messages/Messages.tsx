import React from 'react';
import { FC } from 'react';

import { Message } from './Message';

import './Messages.css';

// Тип данных, описывающий входные параметры компонета Messages
type MessagesProps = {
  messages: string[]  // массив с сообщениями
}

export const Messages: FC<MessagesProps> = ({ messages }) => {    
  return (
    <div className='messages'>
      {
        messages.map((msg, idx) => (
          <Message key={ idx } text={ msg } />
        ))
      }
    </div>
  );
};