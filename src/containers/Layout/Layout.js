import React, { Suspense, useState } from 'react';

import classes from './Layout.module.css';
import Home from '../Home/Home';
// import Projects from '../Projects/Projects';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Projects = React.lazy(() => import('../Projects/Projects'));
const About = React.lazy(() => import('../About/About'));

const routes = [
  { path: '/', name: 'Acasa', Component: Home },
  { path: '/proiecte', name: 'Proiecte', Component: Projects },
  { path: '/despre', name: 'Despre', Component: About },
];

function Layout() {
  const [modal, setModal] = useState(false);

  const modlaAppear = () => {
    setModal(true);
  };

  const modalDissapear = () => {
    setModal(false);
  };

  return (
    <div className={classes.Layout}>
      {routes.map(({ path, Component }) => {
        return (
          <Route key={path} exact path={path}>
            {({ match }) => {
              return (
                <CSSTransition
                  in={match !== null}
                  timeout={1000}
                  classNames='page'
                  unmountOnExit>
                  <div className='page'>
                    <Suspense fallback={() => <h1>Please wait...</h1>}>
                      <Component
                        modal={modal}
                        showModal={modlaAppear}
                        hideModal={modalDissapear}
                      />
                    </Suspense>
                  </div>
                </CSSTransition>
              );
            }}
          </Route>
        );
      })}
    </div>
  );
}

export default Layout;
