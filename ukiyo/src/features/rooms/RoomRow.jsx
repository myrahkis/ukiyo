/* eslint-disable react/prop-types */
import { useDeleteRoom } from "./useDeleteRoom";
import { useCreateRoom } from "./useCreateRoom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCopy, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDarkMode } from "../../context/DarkModeContext";
import { device } from "../../styles/adaptability";
import styled from "styled-components";
import CreateEditRoomForm from "./CreateEditRoomForm";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import TableRow from "../../ui/TableRow";
import MenuBtn from "../../ui/MenuBtn";
import DeleteBtn from "../../ui/DeleteBtn";

const Img = styled.img`
  display: block;
  width: 11rem;
  height: 9rem;

  @media ${device.mobile} {
    width: 8rem;
    height: 6rem;
  }
`;

const Name = styled.div`
  @media ${device.mobile} {
    min-width: 15rem;
  }
`;

const Capacity = styled.div`
  @media ${device.mobile} {
    min-width: 9rem;
  }
`;

const Price = styled.div`
  font-weight: 700;
`;

const Discount = styled.div`
  color: var(--success-color);
  font-weight: 700;
`;

const btnIconStyle = { color: "var(--light-text-color)", marginRight: "5px" };

function RoomRow({ room }) {
  const { id, name, maxCapacity, regularPrice, discount, img, description } =
    room;
  const { isDeleting, deleteRoomMut } = useDeleteRoom();
  const { isCreating, createRoom } = useCreateRoom();
  const isWorking = isDeleting || isCreating;
  const { isDark } = useDarkMode();

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
    <TableRow role="row" columns="0.6fr 2fr 1.2fr 0.8fr 0.8fr 0.6fr">
      <Img src={img} />
      <Name>{name}</Name>
      <Capacity>Up to {maxCapacity} people</Capacity>
      <Price>${regularPrice}</Price>
      {discount !== 0 ? <Discount>${discount}</Discount> : "—"}
      <Menus.Menu>
        <Menus.Toggle id={id} isDark={isDark} icon={<BsThreeDotsVertical />} />
        <Menus.List id={id}>
          <Menus.Button>
            <MenuBtn onClick={copyHandle} disabled={isWorking}>
              <FaCopy style={btnIconStyle} />
              Copy
            </MenuBtn>
          </Menus.Button>
          <Menus.Button>
            <Modal>
              <Modal.Open opens="edit-form">
                <MenuBtn disabled={isWorking}>
                  <FaEdit style={btnIconStyle} />
                  Edit
                </MenuBtn>
              </Modal.Open>
              <Modal.Window name="edit-form">
                <CreateEditRoomForm roomToEdit={room} />
              </Modal.Window>
            </Modal>
          </Menus.Button>
          <Menus.Button>
            <Modal>
              <Modal.Open opens="delete-confirm">
                <DeleteBtn onClick={deleteHandle} disabled={isWorking}>
                  <MdDelete style={btnIconStyle} />
                  Delete
                </DeleteBtn>
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
    </TableRow>
  );
}

export default RoomRow;
