import React from 'react';
import { FC, useState } from 'react';

import { Header } from '../Header';
import { Layout } from '../Layout';

import { ChatList, ChatRoom } from '../Chat';
import { AddMessageFunc, MessageData } from '../../data';

import './App.css';

export const App: FC<{}> = () => {
  // Состояние компонента, содержащее массив сообщений  
  const [messages, setMessages] = useState<MessageData[]>([]);

  // Функция добавляет новое сообщение
  // Потом я её пробрасываю как callback в компонент ChatRoom
  const appendMessage: AddMessageFunc = (author: string, text: string, income: boolean) => {
    setMessages([
      ...messages, 
      {
        author,
        text,
        income,
      } as MessageData
    ]);
  }

  // Времянка
  // список комнат
  const rooms: string[] = ['Комната 1', 'Комната 2', 'Комната 3'];

  return (
    <div id='app'>    
      <Header />
      <Layout>
        <ChatList rooms={ rooms } />
        <ChatRoom
          roomName={ rooms[0] }
          messages={ messages } 
          appendMessage={ appendMessage }
        />
      </Layout>      
    </div>
  );
};