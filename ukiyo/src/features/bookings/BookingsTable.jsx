import styled from "styled-components";
import Menus from "../../ui/Menus";
import BookingRow from "./BookingRow";
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import EmptyTable from "../../ui/EmptyTable";
import Pagination from "../../ui/Pagination";
import TableFooter from "../../ui/TableFooter";

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
  grid-template-columns: 2fr 1fr 1.5fr 1fr 0.6fr;
  column-gap: 2rem;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 600;
  border-bottom: 1px solid var(--emphasis-color);
  background-color: var(--main-color);
  padding: 1.5rem 2.5rem;
`;

function BookingsTable() {
  const [searchParams] = useSearchParams();

  // filter
  const filterValue = searchParams.get("status");
  let filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // sorting
  const sortByRaw = searchParams.get("sortBy") || "startDate-asc";
  let [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (bookings.length === 0) return <EmptyTable sub="bookings" />;

  return (
    <Menus>
      <Table role="table">
        <TableHeader role="row">
          <div>Room</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
        </TableHeader>
        {bookings.map((booking) => (
          <BookingRow key={booking.id} booking={booking} />
        ))}
        <TableFooter>
          <Pagination count={count} />
        </TableFooter>
      </Table>
    </Menus>
  );
}

export default BookingsTable;
