import { useNavigate } from "react-router-dom";
import BookingDataBox from "../bookings/BookingDataBox";
import useBookingId from "../bookings/useBookingId";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const HeaderInfo = styled.div`
  display: inherit;
  gap: 1rem;
`;

const BackBtn = styled.button`
  border: none;
  background-color: transparent;
  color: var(--light-text-color);

  &:hover {
    color: var(--emphasis-color);
  }
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: 2rem 0;
  gap: 1rem;
`;

const CheckInBtn = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 1rem;
  background-color: var(--emphasis-color);
  color: var(--light-text-color);

  &:hover {
    background-color: var(--dark-emphasis-color);
    transition: background-color 0.3s;
  }
`;

const BackLowBtn = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 1rem;
  background-color: var(--lightest-bg-color);

  &:hover {
    background-color: var(--light-emphasis-color);
    color: var(--light-text);
    transition: all 0.3s;
  }
`;

function CheckInBooking() {
  const { booking, isLoading } = useBookingId();
  const navigate = useNavigate();

  if (isLoading) return <h2>Loading...</h2>;

  const { id, guests, totalPrice, numGuests, hasBreakfast, numNights } =
    booking;

  function checkInHandle() {}
  return (
    <>
      <Header>
        <HeaderInfo>
          <h1>Booking #{booking.id}</h1>
        </HeaderInfo>
        <BackBtn onClick={() => navigate(-1)}>Back</BackBtn>
      </Header>
      <BookingDataBox booking={booking} />
      <BtnsWrapper>
        {booking.status === "unconfirmed" && (
          <CheckInBtn onClick={checkInHandle}>Check in</CheckInBtn>
        )}
        <BackLowBtn onClick={() => navigate(-1)}>Back</BackLowBtn>
      </BtnsWrapper>
    </>
  );
}

export default CheckInBooking;
