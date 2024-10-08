import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 30%;
  padding: 3rem 3.5rem;
  border-radius: 1rem;
  background-color: var(--lightest-bg-color);
  color: var(--dark-text-color);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  border: none;
  border-radius: 1.5rem;
  padding: 1rem;
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

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandle() {}

  return (
    <Form onSubmit={submitHandle}>
      <Wrapper>
        <label htmlFor="email">Email address</label>
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Wrapper>
      <LoginBtn type="submit">Login</LoginBtn>
    </Form>
  );
}

export default LoginForm;
