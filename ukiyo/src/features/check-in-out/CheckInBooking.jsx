import { useNavigate } from "react-router-dom";
import Row from "../../ui/Row";
import BookingDataBox from "../bookings/BookingDataBox";
import useBookingId from "../bookings/useBookingId";

function CheckInBooking() {
  const { booking, isLoading } = useBookingId();
  const { id, guests, totalPrice, numGuests, hasBreakfast, numNights } =
    booking;
  const navigate = useNavigate();

  if (isLoading) return <h2>Loading...</h2>;

  function checkInHandle() {}
  return (
    <>
      <Row>
        <h2>Booking #{booking.id}</h2>
        <button onClick={() => navigate(-1)}>Back</button>
      </Row>
      <BookingDataBox booking={booking} />
      <div>
        {booking.status === "unconfirmed" && (
          <button onClick={checkInHandle}>Check in</button>
        )}
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}

export default CheckInBooking;
