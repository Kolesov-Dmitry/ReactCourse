import React, { FC } from 'react';
import { Message } from './Message';

import { MessageData } from '../../../../data';

import './MessageField.css';

// Тип данных, описывающий входные параметры компонета Messages
type MessageFieldProps = {
  messages: Map<number, MessageData>
  messageIds: number[]
}

export const MessageField : FC<MessageFieldProps> = ({ messages, messageIds }) => {  
  return (
    <div className='chat-room__field'>
      {
        messageIds.map(msgId => {
          const msg = messages.get(msgId);
          return (
            <Message 
              key={ msgId } 
              author={ msg?.author || '' } 
              text={ msg?.text || '' }
              income={ msg?.income || false }
            />
          )
        })
      }
    </div>
  );
};