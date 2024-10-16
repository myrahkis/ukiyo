import { device } from "../../styles/adaptability";
import CreateEditRoomForm from "./CreateEditRoomForm";
import styled from "styled-components";
import Modal from "../../ui/Modal";

const Add = styled.button`
  width: 30%;
  padding: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  background-color: var(--main-color);
  color: var(--light-text-color);
  font-size: 1.5rem;
  font-weight: 600;

  &:hover {
    background-color: var(--dark-bg-color);
    transition: background-color 0.3s;
  }

  @media ${device.mobile} {
    width: 20%;
    padding: 1rem;
    font-size: 1.2rem;
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
