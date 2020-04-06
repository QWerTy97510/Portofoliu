import React from 'react';
import LeftFrame from '../../components/HomeComponents/LeftFrame/LeftFrame';
import RightFrame from '../../components/HomeComponents/RightFrame/RightFrame';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.Home}>
      <LeftFrame />
      <RightFrame />
    </div>
  );
};

export default Home;
