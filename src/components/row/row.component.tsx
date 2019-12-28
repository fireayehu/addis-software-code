import React from 'react';

import { RowContainer } from './row.styles';

interface Props {
  width: string;
}
const Row: React.FC<Props> = ({ children, width }) => (
  <RowContainer width={width}>{children}</RowContainer>
);

export default Row;
