import React from 'react';
import classes from './Project.module.css';

const Project = (props) => {
  return (
    <div className={classes.Project}>
      <img src={props.imageSource} />
      <div className={classes.ProjectInfoDiv}>{props.children}</div>
    </div>
  );
};

export default Project;
