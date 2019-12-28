import React from 'react';
import { SideMenuContainer } from './side-menu.styles';

interface Props {
  isOpen: boolean;
}
const SideMenu: React.FC<Props> = ({ isOpen, children }) => (
  <SideMenuContainer isOpen={isOpen}>{children}</SideMenuContainer>
);

export default SideMenu;
