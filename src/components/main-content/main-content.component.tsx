import React from 'react';
import { MainContentContainer } from './main-content.styles';
interface Props {
  isOpen: boolean;
}
const SideMenu: React.FC<Props> = ({ isOpen, children }) => (
  <MainContentContainer isOpen={isOpen}>{children}</MainContentContainer>
);

export default SideMenu;
