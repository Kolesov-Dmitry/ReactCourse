import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { profileSelector } from '../../store';

import './Profile.css';
import ProfileImg from '../../assets/img/profile.png';

// Компонент профиля пользователя
export const Profile: FC<{}> = () => {
  // Выдёргиваю из store имя пользователя
  const userName = useSelector(profileSelector.userName);
  
  return (
    <div className='profile'>
      <span className='profile__title'>Profile</span>
      <div className='profile__img'>
        <img src={ ProfileImg } alt='User' />
      </div>
      <span className='profile__name'>{ userName }</span>
    </div>
  )
}