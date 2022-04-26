import React from 'react';
import MessageItem from './MessageItem/MessageItem';
import classes from './MessageList.module.css';

const MessageList = () => {

  let messagesData = [
    {
      id: 1,
      message: '[eq'
    },
    {
      id: 2,
      message: 'lorem ipsum lorem lorem lorem sdlasdoa kd apowkdpoaksd ad awd awjdnasd  d ad'
    },
    {
      id: 3,
      message: 'lordoa kd  ad awd awjdnasd  d ad'
    },
    {
      id: 4,
      message: 'wtf ar u doing'
    },
    {
      id: 5,
      message: 'react'
    },
  ]
  return (
    <div className={classes.message_list}>
      {messagesData.map((item) => (
        <MessageItem message={item.message}></MessageItem>
      ))}
    </div>
  );
};

export default MessageList;
