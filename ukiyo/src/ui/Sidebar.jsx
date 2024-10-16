import { device } from "../styles/adaptability";
import styled, { css } from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";

const StyledSidebar = styled.aside`
  background-color: var(--dark-bg-color);
  grid-row: 1 / -1;
  border-right: 1px solid var(--main-color);
  padding: 2rem 3rem;

  @media ${device.tablet} {
    padding: 2em;
  }

  @media ${device.mobile} {
    padding: 1rem;
    ${(props) =>
      !props.isOpen &&
      css`
        display: none;
      `}
  }
`;

function Sidebar({ isOpen }) {
  return (
    <StyledSidebar isOpen={isOpen}>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
