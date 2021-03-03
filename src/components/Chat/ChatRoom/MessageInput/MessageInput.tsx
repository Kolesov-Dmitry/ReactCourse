import React, { FC, useState, ChangeEvent } from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { AddMessageFunc } from '../../../../data';

import './MessageInput.css';

// Входные параметры MessageInput
type MessageInputProps = {
  appendMessage: AddMessageFunc
}

export const MessageInput: FC<MessageInputProps> = ({ appendMessage }) => {
  // Сообщение, введённое пользователем
  const [message, setMessage] = useState<string>('');

  // Обработчик ввода в текстовое поле
  // Сохраняет введённый текст в состояние объекта
  const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value);
  }
  
  // При нажатии на Enter отпавляет введённое сообщение
  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  // Отправляет сообщение
  const sendMessage = () => {
    // Ничего не отправляею, если сообщение пустое
    if (message.length === 0) return;

    // Заряжаю сообщение и очищаю поле ввода
    appendMessage('User', message, false);
    setMessage('');
  }

  return (
    <div className='chat-room__input'>
      <TextField
        className='chat-room__text-field'
        placeholder='Введите сообщение...'
        variant='outlined' 
        margin='none'
        size='small'
        color='primary'
        value={ message }
        fullWidth 
        onChange={ onInputValueChanged }
        onKeyDown={ onInputKeyDown }
      />
      <Button
        variant='text'
        color='primary'
        title='Отправить'
        onClick={ sendMessage }
      >
        <SendIcon />
      </Button>
    </div>
  )
}