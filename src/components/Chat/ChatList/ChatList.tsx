import React, { FC } from 'react';
import { List } from '@material-ui/core';

import { ChatListItem } from './ChatListItem';

import './ChatList.css';

type ChatListProps = {
  chats: number[]
}

// Реализует список комнат
export const ChatList: FC<ChatListProps> = ({ chats }) => {
  return (
    <List component='nav' className="chat-list">
      {
        chats.map((chatId: number) => {
          return (
            <ChatListItem              
              key={ chatId }
              id={ chatId }
              title={ 'Комната ' + chatId } 
            />
          );
        })
      }
    </List>
  );
}