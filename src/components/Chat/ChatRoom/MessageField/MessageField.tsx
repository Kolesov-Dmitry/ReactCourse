import React, { FC } from 'react';
import { Message } from './Message';

import { MessageData } from '../../../../data';

import './MessageField.css';

// Тип данных, описывающий входные параметры компонета Messages
type MessageFieldProps = {
  messages: MessageData[]  // массив с сообщениями  
}

export const MessageField : FC<MessageFieldProps> = ({ messages }) => {  
  return (
    <div className='chat-room__field'>
      {
        messages.map((msg, idx) => (
          <Message 
            key={ idx } 
            author={ msg.author } 
            text={ msg.text }
            income={ msg.income }
          />
        ))
      }
    </div>
  );
};