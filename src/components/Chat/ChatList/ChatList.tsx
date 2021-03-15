import React, { FC } from 'react';
import { List } from '@material-ui/core';

import { AddChatBar } from './AddChatBar';
import { ChatListItem } from './ChatListItem';

import './ChatList.css';

type ChatListProps = {
  chats: { chatId: number, title: string, income: number }[]
}

// Реализует список комнат
export const ChatList: FC<ChatListProps> = ({ chats }) => {
  return (
    <List component='nav' className='chat-list'>
      {
        chats.map(({ chatId, title, income }) => {
          return (
            <ChatListItem              
              key={ chatId }
              id={ chatId }
              title={ title }
              income={ income }
            />
          );
        })
      }
      <AddChatBar />
    </List>
  );
}