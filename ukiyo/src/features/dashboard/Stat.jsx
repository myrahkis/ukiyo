/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledStat = styled.div`
  display: grid;
  grid-template-columns: 6.5rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.5rem;
  row-gap: 0.5rem;
  padding: 1.5rem;
  background-color: var(--lightest-bg-color);
  color: var(--dark-text-color);
  border-radius: 1rem;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: var(--lightest-bg-color);

  & svg {
    width: 3rem;
    height: 3rem;
  }
`;

const Title = styled.h5`
  align-self: self-end;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 1.6rem;
`;

const Value = styled.p`
    font-size: 2rem;
`;

function Stat({ icon, title, value, color }) {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
}

export default Stat;
