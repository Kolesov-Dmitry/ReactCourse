import React, { FC, useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Menu, MenuItem } from '@material-ui/core';

import { chatActions } from '../../../../store';

import './MessageItem.css';

type MessageItemProps = {
  chatId: number;
  msgId:  number;
  income: boolean;
  author: string;
  text:   string; 
};

export const MessageItem: FC<MessageItemProps> = ({ chatId, msgId, income, author, text }) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchor(null);
  };

  const onDeleteMessageClick = () => {
    dispatch(
      chatActions.deleteMessage(chatId, msgId)
    );
  };

  const onItemContentMenu = (event: MouseEvent<HTMLDivElement>) => {    
    if (event.button == 2) {
      event.preventDefault();
      
      setAnchor(event.currentTarget);
    }
  }

  return (
    <>
      <div 
        className={ income ? 'message income' : 'message' }
        onContextMenu={ onItemContentMenu }
      >
        <div className='message__author'>
          { author }
        </div>
        <div className='message__text'>
          { text }
        </div>      
      </div>
      <Menu
        id="item-menu"
        anchorEl={ anchor }
        open={ anchor != null }
        onClose={ handleClose }
      >
        <MenuItem onClick={ onDeleteMessageClick }>Удалить сообщение</MenuItem>        
      </Menu>
    </>
  );
};