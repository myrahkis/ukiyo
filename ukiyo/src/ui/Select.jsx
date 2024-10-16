/* eslint-disable react/prop-types */
import { device } from "../styles/adaptability";
import styled from "styled-components";

const StyledSelect = styled.select`
  cursor: pointer;
  padding: 1.23rem;
  border: none;
  border-radius: 1rem;
  background-color: var(--lightest-bg-color);
  color: var(--dark-text-color);

  @media ${device.mobile} {
    padding: 0.8rem;
  }
`;

function Select({ options, value, onChange }) {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
