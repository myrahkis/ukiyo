import { device } from "../styles/adaptability";
import styled from "styled-components";

const Heading = styled.div`
  display: flex;
  margin-bottom: 3rem;
  justify-content: space-between;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-end;
    /* align-items: center; */
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

export default Heading;
