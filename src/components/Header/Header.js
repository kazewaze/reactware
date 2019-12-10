import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <h1 className="Header__heading">Reactware</h1>
      <p className="Header__tagline">The Hardware store for React Developers</p>
    </header>
  );
}

export default Header;