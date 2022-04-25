import React from 'react'
import classes from './MessageItem.module.css'

const MessageItem = (props) => {
  return (
        <p className={classes.message}>
        {props.message}
        </p>
  )
}

export default MessageItem