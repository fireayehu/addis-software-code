import React from 'react';
import { HeaderContainer, HeaderTitle, ToggleIcon } from './header.styles';

interface Props {
  title: string;
  handleToggle: () => void;
}
const Header: React.FC<Props> = ({ title, handleToggle }) => (
  <HeaderContainer>
    <ToggleIcon onClick={handleToggle}>&#9776;</ToggleIcon>
    <HeaderTitle>{title}</HeaderTitle>
  </HeaderContainer>
);

export default Header;
