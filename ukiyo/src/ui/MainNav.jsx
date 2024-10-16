import { HiHome } from "react-icons/hi";
import { HiMiniHomeModern, HiMiniUsers } from "react-icons/hi2";
import { RiSettings4Fill } from "react-icons/ri";
import { TbBookmarksFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { device } from "../styles/adaptability";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 2rem 0;

  @media ${device.tablet} {
    gap: 0.5rem;
  }
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
    transition: background-color 0.5s;
  }

  @media ${device.tablet} {
    &:link,
    &:visited {
      font-size: 1.5rem;
      padding: 1rem;
      gap: 0.3rem;
    }
  }

  @media ${device.mobile} {
    &:link,
    &:visited {
      font-size: 2rem;
      padding: 1rem 1.5rem;
    }
  }
`;

function MainNav() {
  const { isDark } = useDarkMode();

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiHome
              style={{
                color: `${
                  !isDark ? "var(--light-bg-color)" : "var(--light-text-color)"
                }`,
                size: "10px",
              }}
            />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">
            <TbBookmarksFilled
              style={{
                color: `${
                  !isDark ? "var(--light-bg-color)" : "var(--light-text-color)"
                }`,
                size: "10px",
              }}
            />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/rooms">
            <HiMiniHomeModern
              style={{
                color: `${
                  !isDark ? "var(--light-bg-color)" : "var(--light-text-color)"
                }`,
                size: "10px",
              }}
            />
            <span>Rooms</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <HiMiniUsers
              style={{
                color: `${
                  !isDark ? "var(--light-bg-color)" : "var(--light-text-color)"
                }`,
                size: "10px",
              }}
            />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <RiSettings4Fill
              style={{
                color: `${
                  !isDark ? "var(--light-bg-color)" : "var(--light-text-color)"
                }`,
                size: "10px",
              }}
            />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
