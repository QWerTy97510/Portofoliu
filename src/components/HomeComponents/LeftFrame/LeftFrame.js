import React from 'react';
import classes from './LeftFrame.module.css';
import ProfileImage from '../../../assets/Imagini/profile-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Burger from '../../UI/Burger/Burger';

const LeftFrame = () => {
  return (
    <div className={classes.LeftFrame}>
      <Burger />
      <div className={classes.InfoDiv}>
        <img src={ProfileImage} alt='profile' />
        <div className={classes.InfoDivText}>
          <h1>Tănase Dumitru-Robert</h1>
          <h3>Cunoștințe programare:</h3>
          <ul>
            <li>HTML/HTML5</li>
            <li>CSS/CSS3/SASS</li>
            <li>Javascript/ReactJS</li>
          </ul>
          <h3>Editare:</h3>
          <ul>
            <li>AdobeXD</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className={classes.IconsDiv}>
          <a href='https://www.facebook.com/robert.tanase.9404' target='blank'>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a
            href='https://www.linkedin.com/in/tanase-robert-22776516a/'
            target='blank'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://github.com/QWerTy97510' target='blank'>
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftFrame;
