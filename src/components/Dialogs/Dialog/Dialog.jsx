import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialog.module.css'

const Dialog = (props) => {
  return (
    <NavLink to='1' className={({ isActive }) => (isActive ? classes.active : '')}>
      {' '}
      <div className={classes.dialog}>Lorem.</div>
    </NavLink>
  );
};

export default Dialog;
