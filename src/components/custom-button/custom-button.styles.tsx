import styled from 'styled-components';
import { space, color, SpaceProps, ColorProps } from 'styled-system';

interface CustomButtonProps extends SpaceProps, ColorProps {}
export const ButtonContainer = styled.button<CustomButtonProps>`
  &:hover {
    background: #818181;
    color: #fff;
    letter-spacing: 1px;
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
  ${space}
  ${color}
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  transition: all 0.4s ease 0s;
`;
