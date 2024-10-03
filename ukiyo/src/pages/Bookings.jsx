import BookingsTable from "../features/bookings/BookingsTable";
import BookingsTableOperations from "../features/bookings/BookingsTableOperations";
import Heading from "../ui/Heading";

function Booking() {
  return (
    <div>
      <Heading>
        <h1>All bookings</h1>
        <BookingsTableOperations />
      </Heading>
      <BookingsTable />
    </div>
  );
}

export default Booking;
