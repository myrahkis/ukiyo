import styled from "styled-components";

const Button = styled.button`
  width: fit-content;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 1.5rem;
  font-size: 1.8rem;
  background-color: var(--emphasis-color);
  color: var(--light-text-color);

  &:hover {
    background-color: var(--dark-emphasis-color);
    transition: background-color 0.35s;
  }
`;

export default Button;
