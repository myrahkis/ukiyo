import styled from "styled-components";

const DeleteBtn = styled.button`
  width: 100%;
  height: 100%;
  padding: 1rem 1.5rem;
  border: none;
  background-color: transparent;
  font-weight: 600;
  text-align: start;
  color: var(--light-text-color);

  border: none;

  &:hover {
    background-color: var(--dark-danger-color);
    transition: background-color 0.2s;
  }
`;

export default DeleteBtn;
