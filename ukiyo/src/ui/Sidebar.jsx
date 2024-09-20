import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";

const StyledSidebar = styled.aside`
  background-color: var(--dark-bg-color);
  grid-row: 1 / -1;
  border-right: 1px solid var(--main-color);
  padding: 2rem 3rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
