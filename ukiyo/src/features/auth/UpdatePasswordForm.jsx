import { useForm } from "react-hook-form";
import useUpdUser from "./useUpdUser";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Loader from "../../ui/Loader";
import Button from "../../ui/Button";
import BtnsContainer from "../../ui/BtnsContainer";

function UpdatePasswordForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const { updUserMut, isPending } = useUpdUser();

  function onSubmit({ password }) {
    updUserMut({ password }, { onSuccess: reset });
  }

  if (isPending) return <Loader />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} padding="">
      <FormRow label="New Password" error={errors?.password}>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          width="30"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password should be min length of 8 symbols",
            },
          })}
        />
      </FormRow>
      <FormRow label="Repeat password" error={errors?.passwordConfirm}>
        <Input
          type="password"
          id="passwordConfirm"
          width="30"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords are not equal",
          })}
        />
      </FormRow>
      <BtnsContainer>
        <Button styleAs="clear" type="reset" onClick={reset}>
          Clear
        </Button>
        <Button type="submit">Update account</Button>
      </BtnsContainer>
    </Form>
  );
}

export default UpdatePasswordForm;
