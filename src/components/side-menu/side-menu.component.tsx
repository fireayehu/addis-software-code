import React from 'react';
import { SideMenuContainer } from './side-menu.styles';

interface Props {
  isOpen: boolean;
}
const SideMenu: React.FC<Props> = ({ isOpen, children }) => (
  <SideMenuContainer width={isOpen ? 9 : 0} height="100%" bg="white" pt={6}>
    {children}
  </SideMenuContainer>
);

export default SideMenu;
