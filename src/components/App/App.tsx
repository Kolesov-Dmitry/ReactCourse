import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Welcome } from './Welcome';
import { Profile } from '../Profile';
import { Header } from '../Header';
import { Layout } from '../Layout';
import { ChatList, ChatRoomView } from '../Chat';

import { chatSelector } from '../../store';

import './App.css';

export const App: FC<{}> = () => {    
  // Вытаскиваю список чатов из store
  const chats = useSelector(chatSelector.chats);

  return (
    <div id='app'>            
      <Header />      
      <Layout>
        <ChatList chats={ chats } />
        <Switch>
          <Route 
            exact 
            path='/' 
            component= { Welcome } 
          />
          <Route 
            exact 
            path='/profile' 
            component= { Profile } 
          />
          { 
            chats.map(({ chatId }) => {
              return (
                <Route key={ chatId } 
                  exact 
                  path={ '/chat/' + chatId } 
                  render={ () =>
                    <ChatRoomView
                      chatId={ chatId }                      
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
