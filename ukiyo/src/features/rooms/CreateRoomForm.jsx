import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.8rem;
  margin: 2rem auto;
  padding: 2rem 3rem;
  width: fit-content;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const Label = styled.label`
  width: 16rem;
`;

const Input = styled.input`
  border: none;
  border-radius: 1.5rem;
  padding: 1rem;
  width: 25rem;
`;

const TextArea = styled.textarea`
  border: none;
  border-radius: 1.5rem;
  padding: 1rem;
  width: 25rem;
  max-width: 25rem;
  min-width: 10rem;
`;

const Button = styled.button`
  width: fit-content;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 1.5rem;
  font-size: 1.8rem;
  align-self: flex-end;
  background-color: var(--emphasis-color);
  color: var(--light-text-color);

  &:hover {
    background-color: var(--dark-emphasis-color);
    transition: background-color 0.35s;
  }
`;

function CreateRoomForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="name">Room name</Label>
        <Input type="text" id="name" {...register("name")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input type="number" id="maxCapacity" {...register("maxCapacity")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="regularPrice">Price</Label>
        <Input type="number" id="regularPrice" {...register("regularPrice")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input type="number" id="discount" {...register("discount")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="desc">Room description</Label>
        <TextArea id="desc" {...register("desc")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="img">Photo</Label>
        <Input id="img" accept="image/*" />
      </FormRow>
      <div>
        <Button type="reset">Clear</Button>
        <Button type="submit">Add</Button>
      </div>
    </Form>
  );
}

export default CreateRoomForm;
