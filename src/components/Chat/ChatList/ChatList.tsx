import React, { FC, Dispatch, SetStateAction } from 'react';
import { Drawer, Hidden, IconButton, List } from '@material-ui/core';

import { AddChatBar } from './AddChatBar';
import { ChatListItem } from './ChatListItem';

import BackIcon from '@material-ui/icons/ArrowBack'

import { ChatRoom } from '../../../store';

import './ChatList.css';

type ChatListProps = {
  chats: ChatRoom[];
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>
};

// Реализует список комнат
export const ChatList: FC<ChatListProps> = ({ chats, showMenu, setShowMenu }) => {

  const hideMenu = () => setShowMenu(false);

  const chatList = (
    <>
      {
        chats.map((chat) => {
          return (
            <ChatListItem              
              key={ chat.chatId }
              room={ chat }
              clickHandler={ hideMenu }
            />
          );
        })
      }
    </>
  );
    
  return ( 
    <>
      <Hidden smUp>
        <Drawer
          className="drawer-mobile"
          anchor="left"
          variant="temporary"
          open={ showMenu }          
        >          
          <List component='nav' className='chat-list chat-list-mobile'>
          <IconButton onClick={ hideMenu }>
            <BackIcon />
          </IconButton>
            { chatList }
          <AddChatBar />
          </List>           
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          className="drawer"
          anchor="left"
          variant="persistent"
          open={ true }
        >
          <List component='nav' className='chat-list'>
            { chatList }
          <AddChatBar />
          </List>
        </Drawer>
      </Hidden>
    </>
  );
}