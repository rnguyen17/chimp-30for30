import * as React from 'react';
import { Route } from 'react-router-dom';
import { withFadeInOut } from 'app/utils/animations/withFadeInOut';
import { Home, Introduction, Drumkit } from 'app/views';

interface RouteViewProps {
  path: string;
  component: React.ComponentType<any>;
}

const routeViews: RouteViewProps[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/demos/introduction',
    component: Introduction,
  },
  {
    path: '/demos/drumkit',
    component: Drumkit,
  },
];

const renderRoutes = (routes: RouteViewProps[]) =>
  routes.map((route: RouteViewProps) => {
    const { path, component } = route;
    return <Route key={path} path={path} exact component={withFadeInOut(component)} />;
  });

export const Routes = () => <React.Fragment>{renderRoutes(routeViews)}</React.Fragment>;
