import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import Logo from '../../assets/Logo.svg'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/">
          <img src={Logo} alt="Logo Usertive" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
