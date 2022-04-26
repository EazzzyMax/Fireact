import React from 'react';
import classes from './Header.module.css';
import svgLogo from '../../img/logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header_wrapper}>
      <div className={classes.header}>
        <NavLink to='/'>
        <img className={classes.logo} src={svgLogo}></img>
          {' '}
          <h1>Fireact</h1>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
