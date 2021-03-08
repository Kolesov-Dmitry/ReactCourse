import React, { FC } from 'react';

import './MessageItem.css';

type MessageItemProps = {
  income: boolean
  author: string
  text:   string  
};

export const MessageItem: FC<MessageItemProps> = ({ income, author, text }) => {
  return (
    <div className={ income ? 'message income' : 'message' }>
      <div className='message__author'>
        { author }
      </div>
      <div className='message__text'>
        { text }
      </div>      
    </div>
  );
};