import styled from "styled-components";
import UpdatePasswordForm from "../features/auth/UpdatePasswordForm";
import UpdateUserDataForm from "../features/auth/UpdateUserDataForm";
import Heading from "../ui/Heading";

const Container = styled.div`
  display: flex;
  gap: 3rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

function Account() {
  return (
    <>
      <Heading>
        <h1>Update your account</h1>
      </Heading>
      <Container>
        <Wrapper>
          <h2>Update user data</h2>
          <UpdateUserDataForm />
        </Wrapper>
        <Wrapper>
          <h2>Update password</h2>
          <UpdatePasswordForm />
        </Wrapper>
      </Container>
    </>
  );
}

export default Account;
