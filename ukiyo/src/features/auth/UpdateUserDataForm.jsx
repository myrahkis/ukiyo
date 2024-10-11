import { useState } from "react";
import useUser from "./useUser";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import File from "../../ui/File";
import BtnsContainer from "../../ui/BtnsContainer";
import Button from "../../ui/Button";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currName },
    },
  } = useUser();
  const [fullName, setFullName] = useState(currName);
  const [ava, setAva] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form padding="" onSubmit={handleSubmit}>
      <FormRow label="Email address" error={""}>
        <Input
          type="email"
          id="email"
          value={email}
          width='30'
          disabled
        />
      </FormRow>
      <FormRow label="Full name" error={""}>
        <Input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} width='30' />
      </FormRow>
      <FormRow label="Avatar image" error={""}>
        <File type="file" id="ava" accept="image/*" value={ava} onChange={(e) => setAva(e.target.files[0])} width='30' />
      </FormRow>
      <BtnsContainer>
        <Button styleAs="clear" type="reset">
          Clear
        </Button>
        <Button type="submit">Update account</Button>
      </BtnsContainer>
    </Form>
  );
}

export default UpdateUserDataForm;
