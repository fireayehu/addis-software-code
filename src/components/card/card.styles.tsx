import styled from 'styled-components';
import {
  layout,
  space,
  color,
  LayoutProps,
  SpaceProps,
  ColorProps
} from 'styled-system';

interface CardProps extends LayoutProps, SpaceProps, ColorProps {}
export const CardContainer = styled.div<CardProps>`
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  ${layout}
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
`;

export const Image = styled.img<CardProps>`
  ${layout}
  border-radius: 5px 5px 0 0;
`;

export const ContentContainer = styled.div<CardProps>`
  ${space}
`;

export const CardButton = styled.button<CardProps>`
  &:hover {
    ${color}
    letter-spacing: 1px;
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
  color: #000;
  text-transform: uppercase;
  background: #fff;
  ${space}
  border-radius: 5px;
  border: none;
  transition: all 0.4s ease 0s;
`;
