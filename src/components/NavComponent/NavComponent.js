import React from 'react';
import classes from './NavComponent.module.css';
import { NavLink } from 'react-router-dom';

const NavComponent = () => {
  return (
    <nav
      className={classes.RightFrameInfoNav}
      style={{ width: '70%', margin: 'auto' }}>
      <ul>
        <li>
          <NavLink to='/' exact>
            Acasa
          </NavLink>
        </li>
        <li>
          <NavLink to='/proiecte' exact>
            Proiecte
          </NavLink>
        </li>
        <li>
          <NavLink to='/despre' exact>
            Despre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
