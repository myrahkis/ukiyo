/* eslint-disable react/prop-types */
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

const StyledErrorFallback = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.8rem;
  background-color: var(--main-color);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 4rem 5rem;
  width: 65%;
  background-color: var(--dark-bg-color);
  border-radius: 1rem;
`;

const Error = styled.p`
  font-size: 1.7rem;
  letter-spacing: 0.2rem;
`;

const Button = styled.button`
  padding: 1.3rem 1.5rem;
  border: none;
  border-radius: 1.5rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  background-color: var(--light-emphasis-color);
  color: var(--light-text-color);

  &:hover {
    background-color: var(--dark-emphasis-color);
    transition: background-color 0.3s;
  }
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Container>
          <h1>Something went wrong 🥲</h1>
          <Error>Error: {error.message}</Error>
          <Button onClick={resetErrorBoundary}>Try again</Button>
        </Container>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;
