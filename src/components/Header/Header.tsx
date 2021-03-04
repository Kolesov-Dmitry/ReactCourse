import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

type HeaderProps = {
    appendChat: () => void
}

export const Header: FC<HeaderProps> = ({ appendChat }) => {
    return (
        <header>
            <Link to='/profile'>Профиль</Link>
            <div className='sep'></div>
            <div 
                className='link'
                onClick= { appendChat }
            >
                Новый чат
            </div>
        </header>
    );
}