/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.5rem;

  & input[type="checkbox"] {
    cursor: pointer;
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--main-color);
  }

  & input[type="checkbox"]:disabled {
    cursor: not-allowed;
    accent-color: var(--disabled-color);
  }

  & label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

function Checkbox({ id, checked, onChange, disabled = false, children }) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </StyledCheckbox>
  );
}

export default Checkbox;
