import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MessageField } from './MessageField/MessageField';
import { MessageInput } from './MessageInput/MessageInput';

import { chatActions, chatSelector, profileSelector } from '../../../store';

import './ChatRoomView.css';

type ChatRoomViewProps = {
  chatId: number  
};

export const ChatRoomView: FC<ChatRoomViewProps> = ({ chatId }) => {
  
  const messages = useSelector(chatSelector.messages(chatId));
  const userName = useSelector(profileSelector.userName);
  
  const dispatch = useDispatch();
  const sendMessage = (chatId: number, author: string, text: string) => {
    dispatch(chatActions.postMessage(chatId, author, text));
  };

  return (
    <div className='chat-room'>      
      <MessageField 
        chatId={ chatId }
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