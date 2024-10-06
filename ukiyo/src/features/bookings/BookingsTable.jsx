import styled from "styled-components";
import Menus from "../../ui/Menus";
import BookingRow from "./BookingRow";
import EmptyTable from "../../ui/EmptyTable";
import Pagination from "../../ui/Pagination";
import TableFooter from "../../ui/TableFooter";
import useBooking from "./useBooking";
import Table from "../../ui/Table";
import TableHeader from "../../ui/TableHeader";
import Loader from "../../ui/Loader";

function BookingsTable() {
  const { isLoading, bookings, count, error } = useBooking();

  if (isLoading) return <Loader />;

  if (bookings.length === 0) return <EmptyTable sub="bookings" />;

  return (
    <Menus>
      <Table role="table">
        <TableHeader role="row" columns="2fr 1fr 1.5fr 0.9fr 0.4fr 0.2fr">
          <div>Room</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
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
