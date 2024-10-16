import { device } from "../styles/adaptability";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-radius: 1.5rem;
  padding: 1rem;
  width: ${(props) => props.width}rem;
  font-size: 1.5rem;

  &:focus {
    outline: 2px dashed var(--emphasis-color);
  }

  @media ${device.tablet} {
    width: 20rem;
    font-size: 1rem;
  }

  @media ${device.mobile} {
    width: 23rem;
    font-size: 1.5rem;
    padding: 1rem;
  }
`;

export default Input;
