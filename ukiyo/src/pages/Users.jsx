import styled from "styled-components";
import SignUpForm from "../features/auth/SignUpForm";
import Heading from "../ui/Heading";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Users() {
  return (
    <>
      <Heading>
        <h1>Create new user</h1>
      </Heading>
      <Wrapper>
        <SignUpForm />
      </Wrapper>
    </>
  );
}

export default Users;
