import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { profileSelector } from '../../store';

import { Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

import ProfileImg from '../../assets/img/profile.png';
import './Header.css';

type HeaderProps = {
  toogleShowMenu: () => void;
}

export const Header: FC<HeaderProps> = ({ toogleShowMenu }) => {
  const userName = useSelector(profileSelector.userName);

  return (
    <header>
      <Hidden smUp>
        <IconButton onClick={ toogleShowMenu } >
          <MenuIcon style={ { color: '#fff'} } /> { /* Никто ничего не видел =.= */ }
        </IconButton>
      </Hidden>
      <Link to='/profile'>
      <div className='profile__img'>
        <img src={ ProfileImg } alt={ userName } />
      </div>
        { userName }
      </Link>
    </header>
  );
}