import React, { FC } from 'react';

import './Profile.css';
import ProfileImg from '../../assets/img/profile.png';

// Компонент профиля пользователя
export const Profile: FC<{}> = () => {
  return (
    <div className='profile'>
      <span className='profile__title'>Profile</span>
      <div className='profile__img'>
        <img src={ ProfileImg } alt='User' />
      </div>
      <span className='profile__name'>Батька User</span>
    </div>
  )
}