import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useSignUp from "./useSignUp";
import Loader from "../../ui/Loader";

const BtnsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  gap: 1rem;
`;

function SignUpForm() {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();
  const { signUpMut, isPending } = useSignUp();
  const navigate = useNavigate();

  function onSubmit({ fullName, email, password }) {
    signUpMut(
      { fullName, email, password },
      { onSettled: reset, onSuccess: navigate("/login", { replace: true }) }
    );
  }

  if (isPending) return <Loader />;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      width="60"
      centered="center"
      padding="5rem 10rem"
    >
      <FormRow label="Full name" error={errors?.fullName}>
        <Input
          type="text"
          id="fullName"
          width="30"
          {...register("fullName", {
            required: "This field is required",
            minLength: {
              value: 2,
              message: "Name should be longer than 2 symbols!",
            },
          })}
        />
      </FormRow>
      <FormRow label="Email address" error={errors?.email}>
        <Input
          type="email"
          id="email"
          width="30"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Enter a valid email address",
            },
          })}
        />
      </FormRow>
      <FormRow label="Password (min 8 characters)" error={errors?.password}>
        <Input
          type="password"
          id="password"
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
      <BtnsWrapper>
        <Button type="reset" styleAs="clear" onClick={reset}>
          Clear
        </Button>
        <Button>Create new user</Button>
      </BtnsWrapper>
    </Form>
  );
}

export default SignUpForm;
