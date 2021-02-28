import React, { FC } from 'react';
import { List } from '@material-ui/core';

import { ChatListItem } from './ChatListItem';

import './ChatList.css';

type ChatListProps = {
  rooms: string[]
}

// Реализует список комнат
export const ChatList: FC<ChatListProps> = ({ rooms }) => {
  return (
    <List component='nav' className="chat-list">
      {
        rooms.map((title: string) => {
          return (
            <ChatListItem 
              key={ title }
              title={ title } 
            />
          );
        })
      }
    </List>
  );
}