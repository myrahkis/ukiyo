import { device } from "../styles/adaptability";
import styled from "styled-components";

const Tag = styled.div`
  width: fit-content;
  padding: 1rem 1.5rem;
  border-radius: 1.5rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  background-color: var(--${(props) => props.type}-emphasis-color);
  color: var(--light-text-color);

  @media ${device.mobile} {
    font-size: 1rem;
    width: 8.5rem;
    padding: 1rem;
  }
`;

export default Tag;
