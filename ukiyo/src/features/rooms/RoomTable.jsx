import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";
import styled from "styled-components";
import RoomRow from "./RoomRow";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import EmptyTable from "../../ui/EmptyTable";

const Table = styled.div`
  overflow: hidden;
  border: 1px solid var(--main-color);
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background-color: var(--lightest-bg-color);
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
  const [searchParams] = useSearchParams();

  if (isLoading) return <h1>Loading...</h1>;

  // filter
  const filterValue = searchParams.get("discount") || "all";
  let filteredRooms;

  switch (filterValue) {
    case "all":
      filteredRooms = rooms;
      break;
    case "with-discount":
      filteredRooms = rooms.filter((room) => room.discount > 0);
      break;
    case "no-discount":
      filteredRooms = rooms.filter((room) => room.discount === 0);
      break;
  }

  // sort
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");

  const modifier = direction === "asc" ? 1 : -1;
  const sortedRooms = filteredRooms.sort((a, b) => {
    const valA = a[field];
    const valB = b[field];

    if (typeof valA === "number" && typeof valB === "number") {
      // Сравнение чисел
      return (valA - valB) * modifier;
    } else if (typeof valA === "string" && typeof valB === "string") {
      // Сравнение строк
      return valA.localeCompare(valB) * modifier;
    }
  });

  if (sortedRooms.length === 0) return <EmptyTable sub="rooms" />;

  return (
    <Menus>
      <Table role="table">
        <TableHeader role="row">
          <div></div>
          <div>Room</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </TableHeader>
        {sortedRooms.length === 0 ? (
          <h1>Theres is no data to show.</h1>
        ) : (
          sortedRooms.map((room) => <RoomRow key={room.id} room={room} />)
        )}
      </Table>
    </Menus>
  );
}

export default RoomTable;
