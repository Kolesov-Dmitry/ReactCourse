import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';

type ChatListItemProps = {
  id: number
  title: string
}

export const ChatListItem: FC<ChatListItemProps> = ({ id, title }) => {
  return (
    <Link to={ '/chat/' + id + '/' }>
      <ListItem button>
        <ListItemIcon><DraftsIcon /></ListItemIcon>
        <ListItemText>{ title }</ListItemText>
      </ListItem>
    </Link>
  );
}