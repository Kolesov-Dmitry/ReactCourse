import React, { FC, useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, Badge, Menu, MenuItem } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import MailIcon from '@material-ui/icons/Message';

import { chatActions } from '../../../store';

type ChatListItemProps = {
  id: number;
  title: string;
  income: number;
}

export const ChatListItem: FC<ChatListItemProps> = ({ id, title, income }) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchor(null);
  };

  const onDeleteChatClick = () => {
    dispatch(
      chatActions.deleteChat(id)
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
      <Link to={ '/chat/' + id + '/' }>
        <ListItem          
          onContextMenu={ onItemContentMenu }          
          button
        >
          <ListItemIcon><DraftsIcon /></ListItemIcon>
          <ListItemText>{ title }</ListItemText>
          <ListItemSecondaryAction>
            {
              (income > 0) && <Badge badgeContent={ income } color="primary"><MailIcon color="disabled" /></Badge>
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