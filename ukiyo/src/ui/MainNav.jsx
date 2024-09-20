import { FaUser } from "react-icons/fa";
import { HiHome, HiUser } from "react-icons/hi";
import { HiMiniHomeModern, HiMiniUsers } from "react-icons/hi2";
import { RiSettings4Fill } from "react-icons/ri";
import { TbBookmarksFilled, TbUserFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 2rem 0;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 2rem;
    color: var(--light-text-color);
    text-decoration: none;
    padding: 1rem 1.5rem;
    border-radius: 1.5rem;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--main-color);
  }
`;

const iconsStyles = { color: "#9fafa1", size: '10px' };

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiHome style={iconsStyles} />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/booking">
            <TbBookmarksFilled style={iconsStyles} />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/rooms">
            <HiMiniHomeModern style={iconsStyles} />
            <span>Rooms</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <HiMiniUsers style={iconsStyles} />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <RiSettings4Fill style={iconsStyles} />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
