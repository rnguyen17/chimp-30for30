import * as React from 'react';
import { MenuItem, Menu, SideBarWrapper } from './components';

export interface SideBarMenuItemProps {
  path: string;
  label: string;
}

export interface SideBarProps {
  menuItems: SideBarMenuItemProps[];
  className?: string;
}

export const SideBar = ({ menuItems, className }: SideBarProps) => {
  const renderMenuItems = (menuItems: SideBarMenuItemProps[]) =>
    menuItems.map(({ path, label }: SideBarMenuItemProps) => (
      <MenuItem key={label} to={path}>
        {label}
      </MenuItem>
    ));

  return (
    <SideBarWrapper className={className}>
      <Menu>{renderMenuItems(menuItems)}</Menu>
    </SideBarWrapper>
  );
};
