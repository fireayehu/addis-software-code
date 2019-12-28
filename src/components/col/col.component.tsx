import React from 'react';

import { ColContainer } from './col.styles';

interface Props {
  width: string;
  p?: string | number;
}
const Col: React.FC<Props> = ({ children, width, p }) => (
  <ColContainer width={width} p={p ? p : 0}>
    {children}
  </ColContainer>
);

export default Col;
