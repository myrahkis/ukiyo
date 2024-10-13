import styled from "styled-components";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeContext";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.1rem;
  list-style: none;
  justify-content: end;
  align-items: center;
`;

const Btn = styled.button`
  border: none;
  background-color: transparent;
  color: var(--light-text-color);
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;

  &:hover {
    background-color: var(--main-color);
    transition: background-color 0.3s;
  }
`;

const iconStyle = { fontSize: "2rem" };

function HeaderMenu() {
  const navigate = useNavigate();
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <StyledHeaderMenu>
      <li>
        <Btn onClick={toggleDarkMode}>
          {isDark ? (
            <MdDarkMode style={iconStyle} />
          ) : (
            <MdLightMode style={iconStyle} />
          )}
        </Btn>
      </li>
      <li>
        <Btn onClick={() => navigate("/account")}>
          <VscAccount style={iconStyle} />
        </Btn>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
