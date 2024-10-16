import { device } from "../styles/adaptability";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import styled, { css } from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/auth/UserAvatar";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--dark-bg-color);
  padding: 2rem 3rem;
  border-bottom: 1px solid var(--main-color);

  @media ${device.tablet} {
    padding: 1.5rem;
  }

  @media ${device.mobile} {
    padding: 0.5rem 1.5rem;
    ${(props) =>
      props.isOpen
        ? css``
        : css`
            grid-column: 1 / -1;
          `}
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${device.mobile} {
    flex-direction: column;
    justify-content: end;
    width: fit-content;
  }
`;

const OpenSideBar = styled.button`
  visibility: collapse;
  border: none;
  background-color: transparent;
  color: var(--light-text-color);

  @media ${device.mobile} {
    visibility: visible;

    & svg {
      font-size: 2.5rem;
    }
  }
`;

function Header({ isOpen, onOpen }) {
  return (
    <StyledHeader isOpen={isOpen}>
      <OpenSideBar onClick={() => onOpen((open) => !open)}>
        {!isOpen ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
      </OpenSideBar>
      <Wrapper isOpen={isOpen}>
        <UserAvatar />
        <HeaderMenu />
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;
