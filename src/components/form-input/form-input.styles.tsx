import styled from 'styled-components';
import { layout, space, LayoutProps, SpaceProps } from 'styled-system';

interface FormInputProps extends LayoutProps, SpaceProps {}
export const Input = styled.input<FormInputProps>`
  ${layout}
  ${space}
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
`;
