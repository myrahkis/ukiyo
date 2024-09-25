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
  padding: 5rem 4rem;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-gutter: stable;
  scrollbar-color: var(--dark-bg-color) var(--light-bg-color);
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
