import React from 'react';
import MessageItem from './MessageItem/MessageItem';
import classes from './MessageList.module.css';

const MessageList = () => {

  return (
    <div className={classes.message_list}>
      <MessageItem message='[eq'/>
      <MessageItem message='wtf r u doing'/>
      <MessageItem message='lorem ipsum lorem lorem lorem sdlasdoa kd apowkdpoaksd ad awd awjdnasd  d ad'/>
      <MessageItem message='dude'/>
    </div>
  );
};

export default MessageList;
