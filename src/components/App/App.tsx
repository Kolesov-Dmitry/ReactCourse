import React, { FC, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Welcome } from './Welcome';
import { Profile } from '../Profile';
import { Header } from '../Header';
import { Layout } from '../Layout';
import { ChatList, ChatRoomView } from '../Chat';

import { chatSelector, chatActions, profileActions } from '../../store';

import './App.css';
import { Drawer } from '@material-ui/core';

export const App: FC<{}> = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    console.log('Гружу чаты и сообщения');
    dispatch(chatActions.fetchChats());
    dispatch(chatActions.fetchMessages());
    dispatch(profileActions.fetchProfile());
  }, []);

  // Вытаскиваю список чатов из store
  const chats = useSelector(chatSelector.chats);

  const [showMenu, setShowMenu] = useState<boolean>(false);
  
  const toogleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div id='app'>            
      <Header toogleShowMenu={ toogleShowMenu } />
      <Layout>
        <ChatList 
          chats={ chats } 
          showMenu={ showMenu }
          setShowMenu={ setShowMenu }
        />
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
