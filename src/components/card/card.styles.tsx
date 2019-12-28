import styled from 'styled-components';

export const CardContainer = styled.div`
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  border-radius: 5px;
`;

export const Image = styled.img`
  width:100%
  border-radius: 5px 5px 0 0;
`;

export const ContentContainer = styled.div`
  padding: 2px 16px;
`;

export const Row = styled.div`
  width: 100%;
  content: '';
  display: table;
  clear: both;
`;

export const Col = styled.div`
  width: 50%;
  float: left;
  padding-bottom: 4px;
`;
