import React from 'react';
import classes from './About.module.css';
import NavComponent from '../../components/NavComponent/NavComponent';
import Burger from '../../components/UI/Burger/Burger';

const About = () => {
  return (
    <div className={classes.About}>
      <NavComponent />
      <Burger />
      <div className={classes.AboutInfo}>
        <div className={classes.AboutInfoLeft}>
          <p>
            Bună! Pentru început, dă-mi voie să mă prezint! Numele meu este
            Tănase Dumitru Robert, am 19 ani și urmez studiile Facultății de
            Economie și Administrare a Afacerilor din cadrul Universității de
            Vest din Timișoara. Specializarea pe care o urmez este Informatică
            Economică.
          </p>
          <p>
            Pasiunea pentru web development a apărut in ultimul an de liceu, și
            de atunci încerc să mă perfectionez cat de mult pot pentru o
            posibilă carieră in Web Development.
          </p>
        </div>
        <div className={classes.AboutInfoRight}>
          <p>Limbajele invatate pana acum sunt:</p>
          <ul>
            <li>HTML/HTML5</li>
            <li>CSS/CSS3/SASS</li>
            <li>Javascript (ReactJS ca și framework)</li>
          </ul>
          <p>
            De asemenea, am și câteva cunoștințe de Back-End folosind limbajul
            PHP impreună cu MySQL ca și bază de date.
          </p>
          <p>
            Despre mine, aș mai putea să adaug faptul ca îmi place să învăț și
            să mă dezvolt cât de mult posibil, în orice domeniu.
          </p>
        </div>
      </div>
      <div>
        <p>Telefon: 0765 065 446</p>
        <p>E-mail: tanaserobert975@yahoo.com/tanaserobert31@gmail.com</p>
      </div>
    </div>
  );
};

export default About;
