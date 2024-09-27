/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { useCreateRoom } from "./useCreateRoom";
import { useEditRoom } from "./useEditRoom";

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.521);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.8rem;
  /* margin: 2rem auto; */
  padding: 2rem 3rem;
  width: fit-content;
  background-color: var(--main-color);
  border: 4px dashed var(--dark-bg-color);
  border-radius: 2rem;
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

const Close = styled.button`
  width: fit-content;
  align-self: flex-end;
  /* margin-top: 2rem;
  margin-right: 2rem; */
  font-size: 1.5;
  font-weight: 800;
  padding: 0.5rem 1rem;
  background-color: var(--danger-color);
  border: none;
  border-radius: 1rem;
  color: var(--light-text-color);

  &:hover {
    background-color: var(--dark-danger-color);
    transition: background-color 0.3s;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  width: fit-content;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 1.5rem;
  font-size: 1.8rem;
  background-color: var(--emphasis-color);
  color: var(--light-text-color);

  &:hover {
    background-color: var(--dark-emphasis-color);
    transition: background-color 0.35s;
  }
`;

function CreateEditRoomForm({ roomToEdit = {}, onClose }) {
  const { id: editId, ...editValues } = roomToEdit;
  const isEditSession = Boolean(editId);
  const { isCreating, createRoom } = useCreateRoom();
  const { isEditing, editRoom } = useEditRoom();

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
            onClose(false);
          },
        } 
      );
    else
      createRoom(
        { ...data, img: img },
        {
          onSuccess: () => {
            reset();
            onClose(false);
          },
        }
      );
  }

  return (
    <Modal>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Close onClick={() => onClose(false)}>X</Close>
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
    </Modal>
  );
}

export default CreateEditRoomForm;
