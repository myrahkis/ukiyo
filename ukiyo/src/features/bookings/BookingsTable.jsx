import styled from "styled-components";
import Menus from "../../ui/Menus";
import BookingRow from "./BookingRow";
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
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

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
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
      </Table>
    </Menus>
  );
}

export default BookingsTable;
