import styled from "styled-components";
import RoomTable from "../features/rooms/RoomTable";
import Row from "../ui/Row";
import { useState } from "react";
import CreateRoomForm from "../features/rooms/CreateEditRoomForm";

const Heading = styled.div`
  display: flex;
  margin-bottom: 3rem;
  justify-content: space-between;
`;

const Sort = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 1.5rem;
  background-color: transparent;
  font-size: 1.5rem;
  /* background-color: var(--emphasis-color); */
  color: var(--light-text-color);

  &:hover {
    background-color: var(--emphasis-color);
    transition: background-color 0.35s;
  }
`;

function Rooms() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Heading>
        <h1>All rooms</h1>
        <Sort>Filter/sort</Sort>
      </Heading>
      <RoomTable />
      <button onClick={() => setIsOpen((open) => !open)}>Add new room</button>
      {isOpen && <CreateRoomForm />}
    </div>
  );
}

export default Rooms;
