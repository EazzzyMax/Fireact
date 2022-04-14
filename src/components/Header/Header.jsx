import React from 'react';
import classes from './Header.module.css';
import svgLogo from '../../img/logo.svg';

const Header = () => {
  return (
    <header className={classes.header_wrapper}>
      <div className={classes.header}>
        <img className={classes.logo} src={svgLogo}></img>
        <h1>Fireact</h1>
      </div>
    </header>
  );
};

export default Header;
