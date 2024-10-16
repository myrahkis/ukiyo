import { device } from "../styles/adaptability";
import styled from "styled-components";

const File = styled.input`
  width: ${(props) => props.width}rem;

  &::file-selector-button {
    cursor: pointer;
    padding: 1rem 2rem;
    background-color: var(--dark-bg-color);
    color: var(--light-text-color);
    border: none;
    border-radius: 2rem;

    &:hover {
      background-color: var(--main-color);
      transition: background-color 0.3s;
    }

    @media ${device.tablet} {
      padding: 1rem 1.5rem;
      font-size: 1rem;
    }

    @media ${device.mobile} {
      font-size: 1.3rem;
      padding: 1rem;
    }
  }

  @media ${device.tablet} {
    width: 20rem;
    font-size: 1rem;
  }

  @media ${device.mobile} {
    width: 23rem;
    font-size: 1.5rem;
  }
`;

export default File;
