import React from 'react';
import classes from './Button.module.css';

const Button = (Props) => {
  return (
    <button className={classes.button}>
      {Props.txt}
    </button>
  )
};

export default Button;
