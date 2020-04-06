import React from 'react';
import classes from './RightFrame.module.css';
import CmpPhoInterface from '../../../assets/Imagini/computer-phone-interface.png';
import NavComponent from '../../NavComponent/NavComponent';

const RightFrame = () => {
  return (
    <div className={classes.RightFrame}>
      <div className={classes.RightFrameInfo}>
        <NavComponent />
        <img src={CmpPhoInterface} alt='computer-phone' />
      </div>
    </div>
  );
};

export default RightFrame;
