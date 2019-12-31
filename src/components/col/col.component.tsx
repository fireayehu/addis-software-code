import React from 'react';

import { ColContainer } from './col.styles';

interface Props {
  width: string;
  p?: string | number;
  pb?: string | number;
  ml?: string | number;
}
const Col: React.FC<Props> = ({ children, width, p, pb, ml }) => (
  <ColContainer width={width} p={p ? p : 0} pb={pb ? pb : 0} ml={ml ? ml : 0}>
    {children}
  </ColContainer>
);

export default Col;
