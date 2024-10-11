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
  }
  &::file-
`;

export default File;
