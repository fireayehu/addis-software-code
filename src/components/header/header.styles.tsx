import styled from 'styled-components';
import {
  layout,
  space,
  color,
  fontSize,
  LayoutProps,
  SpaceProps,
  ColorProps,
  FontSizeProps
} from 'styled-system';

interface HeaderProps
  extends LayoutProps,
    SpaceProps,
    ColorProps,
    FontSizeProps {}

export const HeaderContainer = styled.div<HeaderProps>`
  ${layout}
  ${color}
  ${space}
  position: relative;
`;

export const HeaderTitle = styled.h1<HeaderProps>`
  ${fontSize}
  ${space}
  ${color}
  display: inline-block;
`;

export const ToggleIcon = styled.span<HeaderProps>`
  ${fontSize}
  ${space}
  ${color}
  cursor: pointer;
`;
