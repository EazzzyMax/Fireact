import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css'

const DialogItem = (props) => {
  let id = 99;
  if (props.id) {
    id = props.id;
  }
  console.log(id);
  return (
    <NavLink to={id} className={({ isActive }) => (isActive ? classes.active : '')}>
      {' '}
      <div className={classes.dialogItem}>{props.name}</div>
    </NavLink>
  );
};

export default DialogItem;
