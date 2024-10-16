import { device } from "../styles/adaptability";
import styled from "styled-components";

const TableFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2.3rem;
  background-color: var(--main-color);

  @media ${device.mobile} {
    padding: 1rem;
  }
`;

export default TableFooter;
