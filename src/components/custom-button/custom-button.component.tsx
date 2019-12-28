import React from 'react';

import { ButtonContainer } from './custom-button.styles';

interface Props {
  text: string;
  color?: string;
  type: 'button' | 'reset' | 'submit' | undefined;
  bg?: string | number;
}

const CustomButton: React.FC<Props> = ({ text, color, type, bg }) => (
  <ButtonContainer color={color} p={3} type={type} bg={bg}>
    {text}
  </ButtonContainer>
);

export default CustomButton;
