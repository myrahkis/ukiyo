import styled from "styled-components";
import Logout from "../ui/Logout";

const StyledHeader = styled.header`
  background-color: var(--dark-bg-color);
  padding: 2rem 3rem;
  border-bottom: 1px solid var(--main-color);
`;

function Header() {
  return (
    <StyledHeader>
      Header
      <Logout />
    </StyledHeader>
  );
}

export default Header;
