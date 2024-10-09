import styled, { css } from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: ${(props) => props.width}%;
  padding: ${(props) => (props.padding === "" ? "3rem 3.5rem" : props.padding)};
  border-radius: 1rem;
  background-color: var(--lightest-bg-color);
  color: var(--dark-text-color);
  ${(props) =>
    props.centered === "center" &&
    css`
      align-items: center;
    `}
`;

export default Form;
