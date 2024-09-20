import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 26rem 1fr;
`;

const Main = styled.main`
padding: 3rem 4rem;
  /* background-color: green; */
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
