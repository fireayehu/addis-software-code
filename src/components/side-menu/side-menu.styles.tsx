import styled from 'styled-components';
import {
  layout,
  space,
  color,
  LayoutProps,
  SpaceProps,
  ColorProps
} from 'styled-system';

interface SideMenuProps extends LayoutProps, SpaceProps, ColorProps {}

export const SideMenuContainer = styled.div<SideMenuProps>`
  ${space}
  ${layout}
  ${color}
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
`;
