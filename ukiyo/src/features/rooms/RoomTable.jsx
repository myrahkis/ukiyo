import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";
import styled from "styled-components";
import RoomRow from "./RoomRow";

const Table = styled.div`
  overflow: hidden;
  border: 1px solid var(--main-color);
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background-color: #c4d6c6;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 2fr 1.2fr 0.8fr 0.8fr 0.6fr;
  column-gap: 2rem;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 600;
  border-bottom: 1px solid var(--emphasis-color);
  background-color: var(--main-color);
  padding: 1.5rem 1rem;
`;

function RoomTable() {
  const {
    isLoading,
    data: rooms,
    error,
  } = useQuery({ queryKey: ["rooms"], queryFn: getRooms });

  if (isLoading) return <h1>Loading...</h1>;

  return (
      <Table role="table">
        <TableHeader role="row">
          <div></div>
          <div>Room</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </TableHeader>
        {rooms.map((room) => (
          <RoomRow key={room.id} room={room} />
        ))}
      </Table>
  );
}

export default RoomTable;
