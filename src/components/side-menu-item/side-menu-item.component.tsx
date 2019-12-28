import React from 'react';
import { SideMenuItemContainer } from './side-menu-item.styles';

interface Props {
  text: string;
  to: string;
  exact?: boolean;
}
const SideMenuItem: React.FC<Props> = ({ text, to }) => (
  <SideMenuItemContainer to={to}>{text}</SideMenuItemContainer>
);

export default SideMenuItem;
