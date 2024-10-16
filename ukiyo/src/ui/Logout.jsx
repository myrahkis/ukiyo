import { LuLogOut } from "react-icons/lu";
import { device } from "../styles/adaptability";
import useLogout from "../features/auth/useLogout";
import Loader from "./Loader";
import styled from "styled-components";

const StyledLogout = styled.button`
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

function Logout() {
  const { logoutMut, isPending } = useLogout();

  if (isPending) return <Loader />;

  function clickHandle() {
    logoutMut();
  }

  return (
    <StyledLogout onClick={clickHandle}>
      <LuLogOut />
    </StyledLogout>
  );
}

export default Logout;
