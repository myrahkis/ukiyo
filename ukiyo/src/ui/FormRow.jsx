/* eslint-disable react/prop-types */
import { device } from "../styles/adaptability";
import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
    width: fit-content;
    gap: 0.5rem;
  }
`;

const Label = styled.label`
  width: 16rem;

  @media ${device.mobile} {
    width: 100%;
    text-align: start;
  }
`;

const Error = styled.p`
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  font-size: 1.2rem;
  color: var(--danger-color);
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      <Label htmlFor={children.props.id}>{label}</Label>
      <div>
        {children}
        {error && <Error>{error.message}</Error>}
      </div>
    </StyledFormRow>
  );
}

export default FormRow;
