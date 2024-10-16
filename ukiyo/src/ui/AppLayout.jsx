import { Outlet } from "react-router-dom";
import { device } from "../styles/adaptability";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled, { css } from "styled-components";
import { useState } from "react";

const StyledAppLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 26rem 1fr;

  @media ${device.laptop} {
    grid-template-columns: 20rem 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: 15rem 1fr;
  }

  @media ${device.mobile} {
    ${(props) =>
      props.isOpen
        ? css`
            grid-template-columns: 19rem 1fr;
          `
        : css`
            display: flex;
            flex-direction: column;
          `}
  }
`;

const Main = styled.main`
  padding: 5rem 4rem;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-gutter: stable;
  scrollbar-color: var(--dark-bg-color) var(--light-bg-color);

  @media ${device.laptop} {
    padding: 2.5rem 2rem;
  }

  @media ${device.tablet} {
    padding: 3em 2rem;
  }

  @media ${device.mobile} {
    overflow-x: hidden;
    padding: 2rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledAppLayout isOpen={isOpen}>
      <Header isOpen={isOpen} onOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
