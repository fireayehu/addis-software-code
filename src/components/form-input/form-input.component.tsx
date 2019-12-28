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
    />
  </div>
);

export default FormInput;
