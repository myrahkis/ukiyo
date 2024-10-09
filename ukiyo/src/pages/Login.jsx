import styled from "styled-components";
import LoginForm from "../features/auth/LoginForm";
import Logo from "../ui/Logo";

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled.div`
  background-color: var(--dark-bg-color);
  padding: 1rem 2rem;
  border-radius: 4rem;
  margin-bottom: 1.5rem;
`;

const H1 = styled.h1`
  font-size: 3rem;
  padding: 2rem;
`;

function Login() {
  return (
    <LoginLayout>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <H1>Log in to your account</H1>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
