import styled from "styled-components";
import Logo from "../ui/Logo";
import SignUpForm from "../features/auth/SignUpForm";

const SignUpLayout = styled.div`
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

function SignUp() {
  return (
    <SignUpLayout>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <H1>Sign up new account</H1>
      <SignUpForm />
    </SignUpLayout>
  );
}

export default SignUp;
