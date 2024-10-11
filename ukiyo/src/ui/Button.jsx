import styled, { css } from "styled-components";

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

  ${(props) =>
    props.styleAs === "clear" &&
    css`
      background-color: var(--light-bg-color);
      box-shadow: 0px 0px 2px var(--dark-text-color);

      &:hover {
        background-color: var(--main-color);
      }
    `}
`;

export default Button;
