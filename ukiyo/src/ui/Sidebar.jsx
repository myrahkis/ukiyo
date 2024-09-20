import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: var(--dark-bg-color);
  grid-row: 1 / -1;
  border-right: 1px solid var(--main-color);
  padding: 2rem 3rem;
`;

function Sidebar() {
  return <StyledSidebar>Sidebar</StyledSidebar>;
}

export default Sidebar;
