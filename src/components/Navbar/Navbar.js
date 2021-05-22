import React from 'react';

import './styles.scss';
import Logo from '../../Logo.svg';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="/">
          <img src={Logo} alt="Logo Usertive" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
