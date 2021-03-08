import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import ProfileImg from '../../assets/img/profile.png';
import { useSelector } from 'react-redux';
import { profileSelector } from '../../store';

export const Header: FC<{}> = () => {
  const userName = useSelector(profileSelector.userName);

  return (
    <header>
      <Link to='/profile'>
      <div className='profile__img'>
        <img src={ ProfileImg } alt={ userName } />
      </div>
        { userName }
      </Link>
    </header>
  );
}