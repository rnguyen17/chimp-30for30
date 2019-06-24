import * as React from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Contact } from '../views';

const routes = [
  {
    path: '/Home',
    component: Home,
  },
  {
    path: '/About',
    component: About,
  },
  {
    path: '/Contact',
    component: Contact,
  },
];

export const Routes = () => {
  return (
    <React.Fragment>
      {routes.map(route => {
        return <Route key={route.path} path={route.path} exact component={route.component} />;
      })}
    </React.Fragment>
  );
};
