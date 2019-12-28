import React from 'react';
import { HeaderContainer, HeaderTitle, ToggleIcon } from './header.styles';

interface Props {
  title: string;
  handleToggle: () => void;
}
const Header: React.FC<Props> = ({ title, handleToggle }) => (
  <HeaderContainer height={6} width="100%" bg="white" mb={5}>
    <ToggleIcon onClick={handleToggle} fontSize={6} mr={4} color="teal.0">
      &#9776;
    </ToggleIcon>
    <HeaderTitle fontSize={4} color="teal.0" p={3}>
      {title}
    </HeaderTitle>
  </HeaderContainer>
);

export default Header;
