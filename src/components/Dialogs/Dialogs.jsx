import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogList from './DialogList/DialogList';
import classes from './Dialogs.module.css';
import MessageList from './MessageList/MessageList';

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <DialogList/>
      <MessageList/>
    </div>
  );
};

export default Dialogs;
