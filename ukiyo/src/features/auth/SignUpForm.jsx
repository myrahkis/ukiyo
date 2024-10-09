import styled from "styled-components";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const BtnsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  gap: 1rem;
`;

function SignUpForm() {
  return (
    <Form width="60" centered="center" padding="5rem 10rem">
      <FormRow label="Full name" error={""}>
        <Input type="text" id="fullName" width="30" />
      </FormRow>
      <FormRow label="Email address" error={""}>
        <Input type="email" id="email" width="30" />
      </FormRow>
      <FormRow label="Password (min 8 characters)" error={""}>
        <Input type="password" id="password" width="30" />
      </FormRow>
      <FormRow label="Repeat password" error={""}>
        <Input type="password" id="passwordConfirm" width="30" />
      </FormRow>
      <BtnsWrapper>
        <Button type="reset">Clear</Button>
        <Button>Create new user</Button>
      </BtnsWrapper>
    </Form>
  );
}

export default SignUpForm;
