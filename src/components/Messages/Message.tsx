import React from 'react';
import { FC } from 'react';

// Тип данных, описывающий входные параметры компонета Message
type MessageProps = {
  text: string  // текст сообщения
}

export const Message: FC<MessageProps> = ({ text }) => {
  return (
    <div className='message'>{ text }</div>
  );
};