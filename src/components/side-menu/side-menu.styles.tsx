import styled from 'styled-components';
interface SideMenuProps {
  isOpen: boolean;
}
export const SideMenuContainer = styled.div`
  height: 100%;
  width: ${(props: SideMenuProps) => (props.isOpen ? '250px' : '0')};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;
