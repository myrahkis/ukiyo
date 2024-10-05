import { useNavigate } from "react-router-dom";
import Row from "../../ui/Row";
import Tag from "../../ui/Tag";
import BookingDataBox from "./BookingDataBox";
import useBookingId from "./useBookingId";

function BookingDetail() {
  const { booking, isLoading } = useBookingId();
  const { id, status } = booking;
  const navigate = useNavigate();

  if (isLoading) return <h1>Loading...</h1>;

  const statusColor = {
    unconfirmed: "light",
    "checked-in": "success",
    "checked-out": "dark",
  };

  return (
    <>
      <Row>
        <h2>Booking #{id}</h2>
        <Tag type={statusColor[status]}>{status.replace("-", " ")}</Tag>
        <button onClick={() => navigate(-1)}>Back</button>
      </Row>
      <BookingDataBox booking={booking} />
      <div>
        {booking.status === "unconfirmed" && (
          <button onClick={() => navigate(`/check-in/${id}`)}>Check in</button>
        )}
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}

export default BookingDetail;
