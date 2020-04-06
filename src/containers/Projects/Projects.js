import React from 'react';
import classes from './Projects.module.css';
import NavComponent from '../../components/NavComponent/NavComponent';
import Project from '../../components/ProjectsComponents/Project/Project';
import caffeApp from '../../assets/Imagini/CaffeApp.gif';
import weatherApp from '../../assets/Imagini/WeatherApp.gif';
import burgerBuilder from '../../assets/Imagini/BurgerBuilderGif.gif';
import Button from '../../components/UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import Burger from '../../components/UI/Burger/Burger';
// import weatherApp from '../../assets/Imagini/WeatherApp.gif'

const github = <FontAwesomeIcon icon={faGithub} />;
const globeAmericas = <FontAwesomeIcon icon={faGlobeAmericas} />;

const Projects = () => {
  return (
    <div className={classes.Projects}>
      <NavComponent />
      <Burger />
      <Project imageSource={caffeApp}>
        <p>
          Un proiect in care mi-am folosit cunostintele pentru a crea un mic
          site, tema princpala fiind cafeaua.
        </p>
        <p>Pentru realizarea proiectului am folosit:</p>
        <ul>
          <li>HTML</li>
          <li>SASS</li>
          <li>Bootstrap</li>
          <li>Vanilla Javascript</li>
        </ul>
        <div className={classes.ButtonsDiv}>
          <Button>{globeAmericas} Vezi site-ul</Button>
          <Button>{github} Github</Button>
        </div>
      </Project>

      <Project imageSource={weatherApp}>
        <p>
          Proiectul acesta l-am realizat pentru a-mi definitiza cunostintele si
          abilitatile in a lucra folosind un API extern.
        </p>
        <p>Pentru realizarea proiectului am folosit: </p>
        <ul>
          <li>ReactJS</li>
          <li>CSS Modules</li>
          <li>Axios</li>
        </ul>

        <div className={classes.ButtonsDiv}>
          <Button>{globeAmericas} Vezi site-ul</Button>
          <Button>{github} Github</Button>
        </div>
      </Project>

      <Project imageSource={burgerBuilder}>
        <p>
          Proiect realizat in timpul in care invatam ReactJS. Acest proiect m-a
          ajutat sa invat noi tehnologii si sa imi insusesc cunostinte cu un
          framework de succes.
        </p>
        <p>Pentru realizarea proiectului am folosit: </p>
        <ul>
          <li>ReactJS</li>
          <li>CSS Modules</li>
          <li>Redux</li>
          <li>Axios</li>
        </ul>

        <div className={classes.ButtonsDiv}>
          <Button>{globeAmericas} Vezi site-ul</Button>
          <Button>{github} Github</Button>
        </div>
      </Project>
    </div>
  );
};

export default Projects;
