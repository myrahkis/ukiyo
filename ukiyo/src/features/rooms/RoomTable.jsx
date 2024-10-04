import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";
import styled from "styled-components";
import RoomRow from "./RoomRow";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import EmptyTable from "../../ui/EmptyTable";
import TableFooter from "../../ui/TableFooter";
import Pagination from "../../ui/Pagination";
import AddRoom from "./AddRoom";

const Table = styled.div`
  overflow: hidden;
  border: 1px solid var(--main-color);
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background-color: var(--lightest-bg-color);
  box-shadow: 0 0 1px black;

  &:last-child {
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }
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
  const [searchParams] = useSearchParams();

  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: rooms, count } = {},
    error,
  } = useQuery({
    queryKey: ["rooms", page],
    queryFn: () => getRooms({ page }),
  });

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
        {sortedRooms.map((room) => (
          <RoomRow key={room.id} room={room} />
        ))}
        <TableFooter>
          <AddRoom />
          <Pagination count={count} />
        </TableFooter>
      </Table>
    </Menus>
  );
}

export default RoomTable;
