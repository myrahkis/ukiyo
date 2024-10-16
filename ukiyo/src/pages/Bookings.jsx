import styled from "styled-components";
import BookingsTable from "../features/bookings/BookingsTable";
import BookingsTableOperations from "../features/bookings/BookingsTableOperations";
import Heading from "../ui/Heading";

const H1 = styled.h1`
  width: 100%;
  text-align: start;
`;

function Booking() {
  return (
    <div>
      <Heading>
        <H1>All bookings</H1>
        <BookingsTableOperations />
      </Heading>
      <BookingsTable />
    </div>
  );
}

export default Booking;
