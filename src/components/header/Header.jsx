import React from 'react';
import Logo from '../../assets/header/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href="#home" className="logo">
        {" "}
        <img src={Logo} alt="" />{" "}
      </a>
    </header>
  );
}

export default Header;