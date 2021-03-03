import React, { FC, ReactNode } from 'react';

import './Layout.css';

// поле children необхоимо для размещения 
// элементов ChatList и MessageField внутри Layout
type LayoutProps = {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      { children }
    </div>
  );
}