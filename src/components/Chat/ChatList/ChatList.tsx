import React, { FC } from 'react';
import { List } from '@material-ui/core';

import { AddChatBar } from './AddChatBar';
import { ChatListItem } from './ChatListItem';

import { ChatRoom } from '../../../store';

import './ChatList.css';

type ChatListProps = {
  chats: ChatRoom[]
};

// Реализует список комнат
export const ChatList: FC<ChatListProps> = ({ chats }) => {
  return (
    <List component='nav' className='chat-list'>
      {
        chats.map((chat) => {
          return (
            <ChatListItem              
              key={ chat.chatId }
              { ...chat }
            />
          );
        })
      }
      <AddChatBar />
    </List>
  );
}