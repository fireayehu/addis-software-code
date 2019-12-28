import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

interface MainContentProps extends SpaceProps {}

export const MainContentContainer = styled.main<MainContentProps>`
  ${space}
  transition: margin-left 0.5s;
`;
