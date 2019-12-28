import React from 'react';

import { Input } from './form-input.styles';

interface Props {
  label?: string;
  name: string;
  placeholder?: string;
  type: string;
}

export const FormInput: React.FC<Props> = ({
  label,
  name,
  placeholder,
  type
}) => (
  <div>
    <label>{label ? label : ''}</label>
    <Input
      type={type}
      name={name}
      placeholder={placeholder ? placeholder : ''}
      width="100%"
      p={4}
      mt={3}
      mb={4}
    />
  </div>
);

export default FormInput;
