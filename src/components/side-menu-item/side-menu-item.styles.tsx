import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideMenuItemContainer = styled(NavLink)`
  &:hover {
    color: #4db6ac;
    border-left: 3px solid #004d40;
  }
  padding: 8px 8px 8px 32px;
  margin: 10px;
  text-decoration: none;
  font-size: 20px;
  border-left: 3px solid #4db6ac;
  box-shadow: 0px 0px 1px #4db6ac;
  color: #818181;
  display: block;
  transition: 0.3s;
  white-space: nowrap;
`;
