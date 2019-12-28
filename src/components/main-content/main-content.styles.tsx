import styled from 'styled-components';
interface MainContentProps {
  isOpen: boolean;
}
export const MainContentContainer = styled.main`
  transition: margin-left 0.5s;
  padding: 16px;
  margin-left: ${(props: MainContentProps) => (props.isOpen ? '250px' : '0')};
`;
