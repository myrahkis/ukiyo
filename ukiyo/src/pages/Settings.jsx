import { device } from "../styles/adaptability";
import styled from "styled-components";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";

const Container = styled.div`
  display: flex;

  @media ${device.mobile} {
    justify-content: center;
  }
`

function Settings() {
  return (
    <>
      <Heading>
        <h1>Update hotel settings</h1>
      </Heading>
      <Container>
        <UpdateSettingsForm />
      </Container>
    </>
  );
}

export default Settings;
