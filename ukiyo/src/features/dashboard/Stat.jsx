/* eslint-disable react/prop-types */
import { device } from "../../styles/adaptability";
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

  @media ${device.desktop} {
    grid-template-columns: 4rem 1fr;
    column-gap: 1rem;
    padding: 1rem;
  }

  @media ${device.laptop} {
    grid-template-columns: 3.5rem 1fr;
    column-gap: 1rem;
    padding: 0.8rem;
  }

  @media ${device.tablet} {
    grid-template-columns: 4rem 1fr;
    padding: 0.8rem;
  }

  @media ${device.mobile} {
    grid-template-columns: 4rem 1fr;
    padding: 1rem;
  }
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

  @media ${device.desktop} {
    & svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media ${device.laptop} {
    & svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media ${device.tablet} {
    & svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media ${device.mobile} {
    width: 4rem;
    & svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

const Title = styled.h5`
  align-self: self-end;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 1.6rem;

  @media ${device.desktop} {
    font-size: 1.3rem;
  }

  @media ${device.laptop} {
    font-size: 1rem;
  }

  @media ${device.tablet} {
    font-size: 1.2rem;
  }

  @media ${device.mobile} {
    font-size: 1rem;
  }
`;

const Value = styled.p`
  font-size: 2rem;

  @media ${device.desktop} {
    font-size: 1.6rem;
  }

  @media ${device.laptop} {
    font-size: 1.3rem;
  }

  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  @media ${device.mobile} {
    font-size: 1.3rem;
  }
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
