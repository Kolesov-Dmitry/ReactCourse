import React, { FC, useState, ChangeEvent } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

import SendIcon from '@material-ui/icons/Send';

import { profileSelector } from '../../../../store';

import './MessageInput.css';

// Входные параметры MessageInput
type MessageInputProps = {
  chatId: number;
  sendMessage: (chatId: number, author: string, text: string) => void;
};

export const MessageInput: FC<MessageInputProps> = ({ chatId, sendMessage }) => {
  // Сообщение, введённое пользователем
  const [message, setMessage] = useState<string>('');

  const userName = useSelector(profileSelector.userName);

  // Отправляет сообщение
  const sendUserMessage = () => {
    // Ничего не отправляею, если сообщение пустое
    if (message.length === 0) return;

    // Заряжаю сообщение и очищаю поле ввода
    sendMessage(chatId, userName, message);
    setMessage('');
  }

  // Обработчик ввода в текстовое поле
  // Сохраняет введённый текст в состояние объекта
  const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value);
  }
  
  // При нажатии на Enter отпавляет введённое сообщение
  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendUserMessage();
    }
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
        onClick={ sendUserMessage }
      >
        <SendIcon />
      </Button>
    </div>
  )
}