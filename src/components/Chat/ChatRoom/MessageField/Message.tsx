import React, { FC } from 'react';

import './Message.css';

import { MessageData } from '../../../../data';

export const Message: FC<MessageData> = ({ author, text, income }) => {
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