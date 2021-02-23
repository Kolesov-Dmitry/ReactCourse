import React, { useEffect } from 'react';
import { FC } from 'react';

import { Message } from './Message';
import { MessageData, AddMessageFunc } from '../../data';
import { Robot } from '../../robot';

import './MessageField.css';

// Тип данных, описывающий входные параметры компонета Messages
type MessageFieldProps = {
  messages: MessageData[]  // массив с сообщениями
  appendMessage: AddMessageFunc
}

export const MessageField : FC<MessageFieldProps> = ({ messages, appendMessage }) => {  
  // Робот, который будет отвечать на сообщения
  const robot = new Robot(appendMessage);

  // ответ Робота на сообщение пользователя
  const answerTheMessage = () => {
    if (messages.length % 2 == 1) {      
      robot.answer();
    }    
  }

  // Реагирую на изменение состояния messages
  // аналог didUpdate
  useEffect(() => {
    answerTheMessage();
  }, [messages]);

  return (
    <div className='message_field'>
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