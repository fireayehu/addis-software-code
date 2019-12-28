import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

interface RowProps extends LayoutProps {}
export const RowContainer = styled.div<RowProps>`
  ${layout}
  content: '';
  display: table;
  clear: both;
`;
