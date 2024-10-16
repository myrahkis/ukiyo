import { useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeContext";
import { device } from "../styles/adaptability";
import styled from "styled-components";
import Logout from "./Logout";

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

  & svg {
    font-size: 2rem;

    @media ${device.mobile} {
      font-size: 1.8rem;
    }
  }

  @media ${device.mobile} {
    padding: 0.5rem;
  }
`;

function HeaderMenu() {
  const navigate = useNavigate();
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <StyledHeaderMenu>
      <li>
        <Btn onClick={toggleDarkMode}>
          {isDark ? <MdDarkMode /> : <MdLightMode />}
        </Btn>
      </li>
      <li>
        <Btn onClick={() => navigate("/account")}>
          <VscAccount />
        </Btn>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
