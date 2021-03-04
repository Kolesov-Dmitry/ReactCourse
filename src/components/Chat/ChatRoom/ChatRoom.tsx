import React, { FC, useEffect } from 'react';
import { MessageField } from './MessageField/MessageField';
import { MessageInput } from './MessageInput/MessageInput';

import { MessageData, AddMessageFunc } from '../../../data';
import { Robot } from '../../../robot';

import './ChatRoom.css';

type ChatRoomProps = {
  chatId: number
  messages: Map<number, MessageData>
  messageIds: number[]
  appendMessage: AddMessageFunc
}

export const ChatRoom: FC<ChatRoomProps> = ({ chatId, messages, messageIds, appendMessage }) => {
  // Робот, который будет отвечать на сообщения
  const robot = new Robot(chatId, appendMessage);

  // ответ Робота на сообщение пользователя
  const answerTheMessage = () => {
    if (messageIds.length % 2 == 1) {      
      robot.answer();
    }    
  }
  
  // Реагирую на изменение состояния messages  
  useEffect(() => {
    answerTheMessage();
  }, [messageIds]);

  return (
    <div className='chat-room'>      
      <MessageField 
        messages={ messages }
        messageIds={ messageIds }
      />
      <MessageInput 
        chatId={ chatId }
        appendMessage={ appendMessage } 
      />
    </div>
  )
}