import React from 'react';
import './Nav.css';
import logo from '../../img/reactware.png';

function Nav() {
  return (
    <nav className="Nav">
      <div className="Nav--left">
        <img className="Nav__logo" src={logo} alt="logo"/>
        <ul className="Nav__links--left">
          <li className="Nav__links__link"><a href="/">Explore</a></li>
          <li className="Nav__links__link"><a href="/">Search</a></li>
          <li className="Nav__links__link"><a href="/">GitHub</a></li>
        </ul>
      </div>
      <div className="Nav--right">
        <ul className="Nav__links--right">
          <li className="Nav__links__link"><a href="/">Sign In</a></li>
          <li className="Nav__links__link--btn"><a className="create-component-btn" href="/">Create Component</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;