import { device } from "../styles/adaptability";
import styled from "styled-components";

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2rem;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 600;
  border-bottom: 1px solid var(--emphasis-color);
  background-color: var(--main-color);
  padding: 1.5rem 2.5rem;

  @media ${device.mobile} {
    font-size: 1.4rem;
    padding: 1rem;
    grid-template-columns: repeat(6, auto);
  }
`;

export default TableHeader;
