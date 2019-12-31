import styled from 'styled-components';
import {
  layout,
  space,
  color,
  fontSize,
  background,
  LayoutProps,
  SpaceProps,
  ColorProps,
  BackgroundProps,
  FontSizeProps
} from 'styled-system';

interface CardProps
  extends LayoutProps,
    SpaceProps,
    ColorProps,
    BackgroundProps,
    FontSizeProps {}
export const CardContainer = styled.div<CardProps>`
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  ${layout}
  ${background}
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
`;

export const Image = styled.img<CardProps>`
  ${layout}
  ${space}
  border-radius: 50%;
`;

export const CardTitle = styled.h4<CardProps>`
  ${space}
  ${color}
  ${fontSize}
`;

export const CardText = styled.p<CardProps>`
  ${space}
  ${color}
  ${fontSize}
`;

export const ContentContainer = styled.div<CardProps>`
  ${space}
  ${layout}
`;

export const CardButton = styled.button<CardProps>`
  &:hover {
    ${color}
    letter-spacing: 1px;
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
  color: #fff;
  text-transform: uppercase;
  background: #818181;
  ${space}
  border: none;
  transition: all 0.4s ease 0s;
`;
