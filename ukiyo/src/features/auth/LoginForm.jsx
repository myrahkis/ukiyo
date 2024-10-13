import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useLogin from "./useLogin";
import Form from "../../ui/Form";
import Input from "../../ui/Input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LoginBtn = styled.button`
  border: none;
  border-radius: 1.5rem;
  background-color: var(--emphasis-color);
  color: var(--light-text-color);
  padding: 1rem 1.5rem;
  font-size: 1.5rem;

  &:hover {
    background-color: var(--dark-emphasis-color);
    transition: background-color 0.3s;
  }
`;

const Label = styled.label`
  font-size: 1.8rem;
`;

const Button = styled.button`
  align-self: flex-end;
  text-decoration: none;
  color: var(--light-text-color);
  background-color: var(--main-color);
  padding: 0.5rem 1rem;
  border-radius: 1rem;

  &:visited {
    color: var(--light-text-color);
  }
  &:hover {
    background-color: var(--dark-bg-color);
    transition: background-color 0.3s;
  }
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginMut, isLoggingIn } = useLogin();

  function submitHandle(e) {
    e.preventDefault();

    if (!email || !password) return;

    loginMut(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={submitHandle} width="28" padding="">
      <Button as={Link} to={`/signup`}>
        Sign up
      </Button>
      <Wrapper>
        <Label htmlFor="email">Email address</Label>
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoggingIn}
        />
      </Wrapper>
      <Wrapper>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoggingIn}
        />
      </Wrapper>
      <LoginBtn type="submit" disabled={isLoggingIn}>
        Login
      </LoginBtn>
    </Form>
  );
}

export default LoginForm;
