import styled from 'styled-components';
import { layout, space, LayoutProps, SpaceProps } from 'styled-system';

interface ColProps extends LayoutProps, SpaceProps {}

export const ColContainer = styled.div<ColProps>`
  ${layout}
  ${space}
  float: left;
`;
