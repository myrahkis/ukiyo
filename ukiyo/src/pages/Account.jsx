import { device } from "../styles/adaptability";
import styled from "styled-components";
import UpdatePasswordForm from "../features/auth/UpdatePasswordForm";
import UpdateUserDataForm from "../features/auth/UpdateUserDataForm";
import Heading from "../ui/Heading";

const Container = styled.div`
  display: flex;
  gap: 5rem;

  @media ${device.desktop} {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const H2 = styled.h2`
  @media ${device.mobile} {
    font-size: 2rem;
  }
`;

function Account() {
  return (
    <>
      <Heading>
        <h1>Update your account</h1>
      </Heading>
      <Container>
        <Wrapper>
          <H2>Update user data</H2>
          <UpdateUserDataForm />
        </Wrapper>
        <Wrapper>
          <H2>Update password</H2>
          <UpdatePasswordForm />
        </Wrapper>
      </Container>
    </>
  );
}

export default Account;
