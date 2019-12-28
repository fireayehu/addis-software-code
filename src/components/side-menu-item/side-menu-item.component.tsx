import React from 'react';
import { SideMenuItemContainer } from './side-menu-item.styles';

interface Props {
  text: string;
  to: string;
  exact?: boolean;
}
const SideMenuItem: React.FC<Props> = ({ text, to }) => (
  <SideMenuItemContainer
    to={to}
    m={3}
    fontSize={3}
    color="gray.1"
    pt={3}
    pl={3}
    pb={3}
    pr={5}
  >
    {text}
  </SideMenuItemContainer>
);

export default SideMenuItem;
