import React, { FC, useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, Badge, Menu, MenuItem } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import MailIcon from '@material-ui/icons/Message';

import { chatActions, ChatRoom } from '../../../store';

type Props = {
  room: ChatRoom,
  clickHandler: () => void
}

export const ChatListItem: FC<Props> = ( { room, clickHandler } ) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchor(null);
  };

  const onDeleteChatClick = () => {
    dispatch(
      chatActions.deleteChat(room.chatId)
    );
  }

  const onItemContentMenu = (event: MouseEvent<HTMLDivElement>) => {    
    if (event.button == 2) {
      event.preventDefault();
      
      setAnchor(event.currentTarget);
    }
  }

  return (
    <>
      <Link to={ '/chat/' + room.chatId + '/' } onClick={ clickHandler }>
        <ListItem          
          onContextMenu={ onItemContentMenu }          
          button
        >
          <ListItemIcon><DraftsIcon /></ListItemIcon>
          <ListItemText>{ room.title }</ListItemText>
          <ListItemSecondaryAction>
            {
              (room.income > 0) && <Badge badgeContent={ room.income } color="primary"><MailIcon color="disabled" /></Badge>
            }
          </ListItemSecondaryAction>
        </ListItem>
      </Link>
      <Menu
        id="item-menu"
        anchorEl={ anchor }
        open={ anchor != null }
        onClose={ handleClose }
      >
        <MenuItem onClick={ onDeleteChatClick }>Удалить чат</MenuItem>        
      </Menu>
  </>
  );
}