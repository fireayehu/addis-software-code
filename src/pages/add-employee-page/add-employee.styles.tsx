import styled from 'styled-components';
import { space, color, SpaceProps, ColorProps } from 'styled-system';
interface ContainerProps extends SpaceProps, ColorProps {}
export const Container = styled.div<ContainerProps>`
  ${space}
  ${color}
  border-radius: 5px;
`;
