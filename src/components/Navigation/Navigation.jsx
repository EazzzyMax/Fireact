import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to='/profile' className={({ isActive }) => (isActive ? classes.active : '')}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to='/dialogs' className={({ isActive }) => (isActive ? classes.active : '')}>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to='/news' className={({ isActive }) => (isActive ? classes.active : '')}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to='/music' className={({ isActive }) => (isActive ? classes.active : '')}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to='/settings' className={({ isActive }) => (isActive ? classes.active : '')}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
