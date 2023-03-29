import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <header>
      <div className="header__container">
        <a href="/" className="header__logo">Logo Here</a>
        <a href="/menu" className="header__iconLink" aria-label="Menu"> </a>
      </div>
    </header>
  );
};
