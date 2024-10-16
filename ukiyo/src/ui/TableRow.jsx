import { device } from "../styles/adaptability";
import styled from "styled-components";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2rem;
  align-items: center;
  padding: 1rem 2.5rem;
  color: var(--dark-text-color);

  &:not(:last-child) {
    border-bottom: 1px solid var(--emphasis-color);
  }

  &:hover {
    background-color: var(--light-bg-color);
    transition: background-color 0.3s;
  }

  @media ${device.mobile} {
    overflow-x: auto;
    column-gap: 1.5rem;
    padding: 1rem;
  }
`;

export default TableRow;
