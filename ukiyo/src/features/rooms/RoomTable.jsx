import RoomRow from "./RoomRow";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import EmptyTable from "../../ui/EmptyTable";
import TableFooter from "../../ui/TableFooter";
import Pagination from "../../ui/Pagination";
import AddRoom from "./AddRoom";
import useRooms from "./useRooms";
import Table from "../../ui/Table";
import TableHeader from "../../ui/TableHeader";
import Loader from "../../ui/Loader";

function RoomTable() {
  const [searchParams] = useSearchParams();
  const { isLoading, rooms, count, error } = useRooms();

  if (isLoading) return <Loader />;

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
        <TableHeader role="row" columns="0.6fr 2fr 1.2fr 0.8fr 0.8fr 0.6fr">
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
