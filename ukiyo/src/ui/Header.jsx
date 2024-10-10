import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/auth/UserAvatar";

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
  background-color: var(--dark-bg-color);
  padding: 2rem 3rem;
  border-bottom: 1px solid var(--main-color);
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
