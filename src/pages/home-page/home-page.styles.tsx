import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

interface HomePageProps extends SpaceProps {}
export const HomePageContainer = styled.div<HomePageProps>`
  ${space}
`;
