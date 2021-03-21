import React, { FC, KeyboardEvent, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { profileSelector, profileActions } from '../../store';

import { IconButton, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import './Profile.css';
import ProfileImg from '../../assets/img/profile.png';


// Компонент профиля пользователя
export const Profile: FC<{}> = () => {
  // Выдёргиваю из store имя пользователя
  const userName = useSelector(profileSelector.userName);
  
  const [editMode, setEditMode] = useState<boolean>(false);
  const editRef = useRef<HTMLInputElement>(null);
    
  const dispatch = useDispatch();

  const onEditBtnClicked = () => {
    setEditMode(true);
  }

  const onEditKeyPressed = (event: KeyboardEvent<HTMLInputElement>) => {    
    if (event.key === 'Enter') {
      editRef.current && dispatch(
        profileActions.postUserName(editRef.current.value)
      );
      
      setEditMode(false);
    }
  }

  return (
    <div className='profile'>
      <span className='profile__title'>Profile</span>
      <div className='profile__img'>
        <img src={ ProfileImg } alt='User' />
      </div>
      <div className='profile__name'>
        { editMode === false
          ? <>{ userName } <IconButton color="primary" onClick={ onEditBtnClicked }><EditIcon /></IconButton></>
          : <TextField 
              label="Имя"
              inputRef={ editRef }
              defaultValue={ userName } 
              variant="outlined" 
              size="small" 
              onKeyPress={ onEditKeyPressed }
              focused
            />
        }
      </div>
    </div>
  )
}