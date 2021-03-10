import React, { FC, useEffect, useRef } from 'react';

import { MessageItem } from './MessageItem';

import { Message } from '../../../../store';

import './MessageField.css';

// Тип данных, описывающий входные параметры компонета Messages
type MessageFieldProps = {
  messages: Message[]
  userName: string
}

export const MessageField : FC<MessageFieldProps> = ({ messages, userName }) => {
  const chatFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatFieldRef != null && chatFieldRef.current != null) {
      chatFieldRef.current.scrollTop =  chatFieldRef.current.scrollHeight;
    }
  }, [messages])

  return (
    <div 
      className='chat-room__field'
      ref={ chatFieldRef }
    >
      {
        messages.map((msg: Message) => {
          return (
            <MessageItem            
              key={ msg.id }
              income={ msg.author !== userName }
              author={ msg.author }
              text={ msg.text }
            />
          );
        })
      }
    </div>
  );
};
