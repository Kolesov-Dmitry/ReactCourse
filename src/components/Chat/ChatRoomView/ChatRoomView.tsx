import React, { Dispatch, FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MessageField } from './MessageField/MessageField';
import { MessageInput } from './MessageInput/MessageInput';

import { chatActions, chatSelector, profileSelector } from '../../../store';

import { Robot } from '../../../robot';

import './ChatRoomView.css';

type ChatRoomViewProps = {
  chatId: number  
};

export const ChatRoomView: FC<ChatRoomViewProps> = ({ chatId }) => {
  
  const messages = useSelector(chatSelector.messages(chatId));
  const userName = useSelector(profileSelector.userName);
  
  const dispatch = useDispatch();
  const sendMessage = (chatId: number, author: string, text: string) => {
    dispatch(chatActions.sendMessage(chatId, author, text));
  };
  
  // Робот, который будет отвечать на сообщения
  const robot = new Robot(chatId, sendMessage);
  
  // Реагирую на изменение состояния messages  
  useEffect(() => {
    // ответ Робота на сообщение пользователя
    if (messages.length % 2 == 1) {      
      robot.answer();
    }
  }, [messages]);

  return (
    <div className='chat-room'>      
      <MessageField 
        userName={ userName }
        messages={ messages }
      />
      <MessageInput 
        chatId={ chatId }
        sendMessage={ sendMessage } 
      />
    </div>
  )
}