import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { withFadeInLeft } from 'app/utils/animations';
import { SideBar } from 'app/modules';
import { menuItems } from './MenuItems';

interface SideNavProps {
  showSideNav: boolean;
}

const SideNavWithAnimation = withFadeInLeft(SideBar);

export const SideNav = ({ showSideNav }: SideNavProps) => (
  <CSSTransition in={showSideNav} classNames="fade" timeout={300} unmountOnExit>
    <SideNavWithAnimation menuItems={menuItems} />
  </CSSTransition>
);
