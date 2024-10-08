import { LuLogOut } from "react-icons/lu";
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
`;

const iconStyle = { fontSize: "2rem" };

function Logout() {
  const { logoutMut, isPending } = useLogout();

  if (isPending) return <Loader />;

  function clickHandle() {
    logoutMut();
  }

  return (
    <StyledLogout onClick={clickHandle}>
      <LuLogOut style={iconStyle} />
    </StyledLogout>
  );
}

export default Logout;
