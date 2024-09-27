/* eslint-disable react/prop-types */
import styled from "styled-components";
import { deleteRoom } from "../../services/apiRooms";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import CreateEditRoomForm from "./CreateEditRoomForm";
import { useState } from "react";

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

const Edit = styled.button`
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
  const { id, name, maxCapacity, regularPrice, discount, img } = room;
  const [showForm, setShowForm] = useState(false);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
      toast.success("You've successfully deleted the room!");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (e) => toast.error(e.message),
  });

  function deleteHandle() {
    if (window.confirm(`Are you sure you want to delete ${name} room?`))
      mutate(id);
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
          <Edit onClick={() => setShowForm((show) => !show)}>Edit</Edit>
          <Delete onClick={deleteHandle} disabled={isPending}>
            Delete
          </Delete>
        </BtnsWrapper>
      </TableRow>
      {showForm && <CreateEditRoomForm roomToEdit={room} onClose={setShowForm} />}
    </>
  );
}

export default RoomRow;
