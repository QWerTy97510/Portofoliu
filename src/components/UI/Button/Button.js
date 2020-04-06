import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <a href='/' className={classes.Button}>
      {props.children}
    </a>
  );
};

export default Button;
