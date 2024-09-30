/* eslint-disable react/prop-types */
import styled from "styled-components";
import CreateEditRoomForm from "./CreateEditRoomForm";
import { useDeleteRoom } from "./useDeleteRoom";
import { useCreateRoom } from "./useCreateRoom";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 2fr 1.2fr 0.8fr 0.8fr 0.6fr;
  column-gap: 2rem;
  align-items: center;
  padding: 1rem 2.5rem;
  color: var(--dark-text-color);

  &:not(:last-child) {
    border-bottom: 1px solid var(--emphasis-color);
  }

  &:hover {
    background-color: var(--light-bg-color);
    transition: background-color 0.3s;
  }
`;

const Img = styled.img`
  display: block;
  width: 11rem;
  height: 9rem;
`;

const Price = styled.div`
  font-weight: 700;
`;

const Discount = styled.div`
  color: var(--success-color);
  font-weight: 700;
`;

const Delete = styled.button`
  width: fit-content;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  background-color: var(--danger-color);
  color: var(--light-text-color);

  &:hover {
    background-color: var(--dark-danger-color);
    transition: background-color 0.35s;
  }
`;

const EditCopy = styled.button`
  width: fit-content;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  background-color: var(--emphasis-color);
  color: var(--light-text-color);

  &:hover {
    background-color: var(--dark-emphasis-color);
    transition: background-color 0.35s;
  }
`;

const BtnsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

function RoomRow({ room }) {
  const { id, name, maxCapacity, regularPrice, discount, img, description } =
    room;
  const { isDeleting, deleteRoomMut } = useDeleteRoom();
  const { isCreating, createRoom } = useCreateRoom();
  const isWorking = isDeleting || isCreating;

  function deleteHandle() {
    deleteRoomMut(id);
  }

  function copyHandle() {
    createRoom({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      img,
      description,
    });
  }

  return (
    <>
      <TableRow role="row">
        <Img src={img} />
        <div>{name}</div>
        <div>Up to {maxCapacity} people</div>
        <Price>${regularPrice}</Price>
        {discount !== 0 ? <Discount>${discount}</Discount> : "—"}
        <BtnsWrapper>
          <Menus.Menu>
            <Menus.Toggle id={id} />
            <Menus.List id={id}>
              <Menus.Button>
                <EditCopy onClick={copyHandle} disabled={isWorking}>
                  Copy
                </EditCopy>
              </Menus.Button>
              <Menus.Button>
                <Modal>
                  <Modal.Open opens="edit-form">
                    <EditCopy disabled={isWorking}>Edit</EditCopy>
                  </Modal.Open>
                  <Modal.Window name="edit-form">
                    <CreateEditRoomForm roomToEdit={room} />
                  </Modal.Window>
                </Modal>
              </Menus.Button>
              <Menus.Button>
                <Modal>
                  <Modal.Open opens="delete-confirm">
                    <Delete onClick={deleteHandle} disabled={isWorking}>
                      Delete
                    </Delete>
                  </Modal.Open>
                  <Modal.Window name="delete-confirm">
                    <ConfirmDelete
                      subject={name}
                      onConfirm={deleteHandle}
                      disabled={isWorking}
                    />
                  </Modal.Window>
                </Modal>
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </BtnsWrapper>
      </TableRow>
    </>
  );
}

export default RoomRow;
