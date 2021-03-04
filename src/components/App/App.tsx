import React, { FC, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Welcome } from './Welcome';
import { Profile } from '../Profile';
import { Header } from '../Header';
import { Layout } from '../Layout';

import { ChatList, ChatRoom } from '../Chat';
import { AddMessageFunc, MessageData } from '../../data';

import './App.css';

export const App: FC<{}> = () => {
  // Состояние компонента, содержащее массив сообщений  
  const [messages, setMessages] = useState<Map<number, MessageData>>(new Map<number, MessageData>());
  
  // Список чатов
  const initialChatsValue = new Map<number, number[]>();
  initialChatsValue.set(1, []);

  const [chats, setChats] = useState<Map<number, number[]>>(initialChatsValue);
  
  // Функция добавляет новое сообщение
  // Потом я её пробрасываю как callback в компонент ChatRoom
  const appendMessage: AddMessageFunc = (chatId: number, author: string, text: string, income: boolean) => {    
    const messageId = messages.size + 1;
    console.log(messageId);

    setMessages(new Map<number, MessageData>(messages.set(messageId, {
      author,
      text,
      income,
    } as MessageData)));

    const messageIds = chats.get(chatId);
    messageIds && setChats(new Map<number, number[]>(chats.set(chatId, [...messageIds, messageId])));
  }

  // Функция создаёт новую комнату в чате
  const appendChat = () => {
    const chatId = chats.size + 1;
    setChats(new Map<number, number[]>(chats.set(chatId, [])));
  }

  return (
    <div id='app'>            
      <Header appendChat= { appendChat } />      
      <Layout>
        <ChatList chats={ Array.from(chats.keys()) } />
        <Switch>
          <Route exact path='/' component= { Welcome } />
          <Route exact path='/profile' component= { Profile } />
          { 
            Array.from(chats).map(([chatId, messageIds]) => {
              return (
                <Route key={ chatId } 
                  exact 
                  path={ '/chat/' + chatId } 
                  render={ () =>
                    <ChatRoom
                      chatId={ chatId }
                      messages={ messages } 
                      messageIds={ messageIds }
                      appendMessage={ appendMessage }
                    /> 
                  }
                />
              )
            })
          }
        </Switch>
      </Layout>      
    </div>
  );
};