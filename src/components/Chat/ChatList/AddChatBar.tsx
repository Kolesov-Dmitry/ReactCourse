import React, { FC, useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux'

import { TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { chatActions } from '../../../store';

import './AddChatBar.css';

export const AddChatBar: FC<{}> = () => {
  // Имя комнаты
  const [title, setTitle] = useState<string>('');

  const dispatch = useDispatch();

  // Метод диспатчит action ADD_CHAT в store
  const addChat = (title: string) => {
    dispatch(chatActions.addChat(title));
  };

  // Обработчик ввода в текстовое поле
  // Сохраняет введённый текст в состояние объекта
  const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  }
  
  // При нажатии на Enter отпавляет введённое сообщение
  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      createChatRoom();
    }
  }

  // Создаю новую комнату в чате
  const createChatRoom = () => {
    // Ничего не делю, если имя комнаты пустое
    if (title.length === 0) return;

    // Создаю новую комнату и очищаю поле ввода
    addChat(title);
    setTitle('');
  }

  return (
    <div className='append-chat-bar'>
      <TextField        
        placeholder='Имя комнаты...'
        variant='outlined' 
        margin='none'
        size='small'
        color='primary'
        value={ title }
        fullWidth 
        onChange={ onInputValueChanged }
        onKeyDown={ onInputKeyDown }
      />
      <Button        
        variant='text'
        color='primary'
        title='Добавить'
        onClick={ createChatRoom }
      >
        <AddIcon />
      </Button>
    </div>
  )
}