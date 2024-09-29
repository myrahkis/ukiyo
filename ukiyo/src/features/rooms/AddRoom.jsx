import CreateEditRoomForm from "./CreateEditRoomForm";
import styled from "styled-components";
import Modal from "../../ui/Modal";

const Add = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  border: none;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  background-color: var(--main-color);
  color: var(--light-text-color);
  font-size: 1.5rem;
  font-weight: 600;

  &:hover {
    background-color: var(--dark-bg-color);
    transition: background-color 0.3s;
  }
`;

function AddRoom() {
  return (
    <Modal>
      <Modal.Open opens="room-form">
        <Add>Add new room</Add>
      </Modal.Open>
      <Modal.Window name="room-form">
        <CreateEditRoomForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddRoom;
