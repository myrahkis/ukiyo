import { useState } from "react";
import useUser from "./useUser";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import File from "../../ui/File";
import BtnsContainer from "../../ui/BtnsContainer";
import Button from "../../ui/Button";
import useUpdUser from "./useUpdUser";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currName },
    },
  } = useUser();
  const [fullName, setFullName] = useState(currName);
  const [ava, setAva] = useState(null);
  const { updUserMut, isPending } = useUpdUser();

  function handleSubmit(e) {
    e.preventDefault();

    if (!fullName) return;

    updUserMut(
      { fullName, ava },
      {
        onSuccess: () => {
          setAva(null);
          e.target.reset();
        },
      }
    );
  }

  function resetHandle() {
    setFullName(currName);
    setAva(null);
  }


  return (
    <Form padding="" onSubmit={handleSubmit}>
      <FormRow label="Email address" error={""}>
        <Input type="email" id="email" value={email} width="30" disabled />
      </FormRow>
      <FormRow label="Full name" error={""}>
        <Input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          width="30"
          disabled={isPending}
        />
      </FormRow>
      <FormRow label="Avatar image" error={""}>
        <File
          type="file"
          id="ava"
          accept="image/*"
          onChange={(e) => {
            setAva(e.target.files[0]);
            console.log(e.target.files[0]);
          }}
          width="30"
          disabled={isPending}
        />
      </FormRow>
      <BtnsContainer>
        <Button styleAs="clear" type="reset" onClick={resetHandle} disabled={isPending} >
          Clear
        </Button>
        <Button type="submit" disabled={isPending}>Update account</Button>
      </BtnsContainer>
    </Form>
  );
}

export default UpdateUserDataForm;
