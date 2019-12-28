import React from 'react';

import { ButtonContainer } from './custom-button.styles';

interface Props {
  text: string;
  color?: string;
}

const CustomButton: React.FC<Props> = ({ text, color }) => (
  <ButtonContainer color={color}>{text}</ButtonContainer>
);

export default CustomButton;
