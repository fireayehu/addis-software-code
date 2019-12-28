import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  space,
  color,
  fontSize,
  SpaceProps,
  ColorProps,
  FontSizeProps
} from 'styled-system';

interface SideMenuItemProps extends SpaceProps, ColorProps, FontSizeProps {}
export const SideMenuItemContainer = styled(NavLink)<SideMenuItemProps>`
  &:hover {
    color: #4db6ac;
    border-left: 3px solid #004d40;
  }
  ${space}
  ${fontSize}
  ${color}
  text-decoration: none;
  border-left: 3px solid #4db6ac;
  box-shadow: 0px 0px 1px #4db6ac;
  display: block;
  transition: 0.3s;
  white-space: nowrap;
`;
