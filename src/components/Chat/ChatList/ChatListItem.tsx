import React, { FC } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';

type ChatListItemProps = {
  title: string
}

export const ChatListItem: FC<ChatListItemProps> = ({ title }) => {
  return (
    <ListItem button>
      <ListItemIcon><DraftsIcon /></ListItemIcon>
      <ListItemText>{ title }</ListItemText>
    </ListItem>
  );
}