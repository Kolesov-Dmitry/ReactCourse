import React, { FC, useEffect } from 'react';
import { MessageField } from './MessageField/MessageField';
import { MessageInput } from './MessageInput/MessageInput';

import { MessageData, AddMessageFunc } from '../../../data';
import { Robot } from '../../../robot';

import './ChatRoom.css';

type ChatRoomProps = {
  roomName: string
  messages: MessageData[]  // массив с сообщениями
  appendMessage: AddMessageFunc
}

export const ChatRoom: FC<ChatRoomProps> = ({ messages, appendMessage }) => {
  // Робот, который будет отвечать на сообщения
  const robot = new Robot(appendMessage);

  // ответ Робота на сообщение пользователя
  const answerTheMessage = () => {
    if (messages.length % 2 == 1) {      
      robot.answer();
    }    
  }
  
  // Реагирую на изменение состояния messages  
  useEffect(() => {
    answerTheMessage();
  }, [messages]);

  return (
    <div className='chat-room'>
      <MessageField messages={ messages } />
      <MessageInput appendMessage={ appendMessage } />
    </div>
  )
}