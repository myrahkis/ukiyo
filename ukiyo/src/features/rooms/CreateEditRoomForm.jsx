/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { useCreateRoom } from "./useCreateRoom";
import { useEditRoom } from "./useEditRoom";
import Button from "../../ui/Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.8rem;
  /* margin: 2rem auto; */
  padding: 2rem 3rem;
  width: fit-content;
`;

const Input = styled.input`
  border: none;
  border-radius: 1.5rem;
  padding: 1rem;
  width: 25rem;
  font-size: 1.3rem;

  &:focus {
    outline: 0.2rem dashed var(--emphasis-color);
  }
`;

const TextArea = styled.textarea`
  border: none;
  border-radius: 1.5rem;
  padding: 1rem;
  width: 25rem;
  max-width: 25rem;
  min-width: 10rem;
  font-size: 1.4rem;

  &:focus {
    outline: 0.2rem dashed var(--emphasis-color);
  }
`;

const File = styled.input`
  &::file-selector-button {
    cursor: pointer;
    padding: 1rem 2rem;
    background-color: var(--dark-bg-color);
    color: var(--light-text-color);
    border: none;
    border-radius: 2rem;

    &:hover {
      background-color: var(--main-color);
      transition: background-color 0.3s;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

function CreateEditRoomForm({ roomToEdit = {}, onClose }) {
  const { id: editId, ...editValues } = roomToEdit;
  const { isCreating, createRoom } = useCreateRoom();
  const { isEditing, editRoom } = useEditRoom();
  const isEditSession = Boolean(editId);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: isEditSession ? editValues : {} });

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const img = typeof data.img === "string" ? data.img : data.img[0];

    if (isEditSession)
      editRoom(
        { newRoomData: { ...data, img }, id: editId },
        {
          onSuccess: () => {
            reset();
            onClose?.(false);
          },
        }
      );
    else
      createRoom(
        { ...data, img: img },
        {
          onSuccess: () => {
            reset();
            onClose?.(false);
          },
        }
      );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Name" error={errors?.name}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 2,
              message: "Name should be longer than 2 symbols!",
            },
          })}
        />
      </FormRow>
      <FormRow label="Max capacity" error={errors?.maxCapacity}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required.",
            min: {
              value: 1,
              message: "Capacity must be at least 1!",
            },
          })}
        />
      </FormRow>
      <FormRow label="Price" error={errors?.regularPrice}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required.",
            min: {
              value: 1,
              message: "Price cannot be negative!",
            },
          })}
        />
      </FormRow>
      <FormRow label="Discount" error={errors?.discount}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          {...register("discount", {
            required: "This field is required.",
            min: {
              value: 0,
              message: "Discount cannot be negative!",
            },
            validate: (value) =>
              +value <= +getValues().regularPrice ||
              "Discount should be less than price!",
          })}
        />
      </FormRow>
      <FormRow label="Description" error={errors?.description}>
        <TextArea
          id="description"
          disabled={isWorking}
          {...register("description", {
            required: "This field is required.",
          })}
        />
      </FormRow>
      <FormRow label="Photo" error={errors?.img}>
        <File
          type="file"
          id="img"
          accept="image/*"
          disabled={isWorking}
          {...register("img", {
            required: isEditSession ? false : "This field is required.",
          })}
        />
        {/* {errors.name && <Error>{errors.name.message}</Error>} */}
      </FormRow>
      <ButtonContainer>
        <Button type="reset" disabled={isWorking}>
          Clear
        </Button>
        <Button type="submit" disabled={isWorking}>
          {isEditSession ? "Edit" : "Add"}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

export default CreateEditRoomForm;
