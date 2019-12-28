import styled from 'styled-components';
interface ButtonProps {
  color?: string;
}
export const ButtonContainer = styled.button`
  &:hover {
    background: ${(props: ButtonProps) =>
      props.color ? props.color : '#ed3330'};
    color: #fff;
    letter-spacing: 1px;
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
  color: #000;
  text-transform: uppercase;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  border: none;
  transition: all 0.4s ease 0s;
`;
