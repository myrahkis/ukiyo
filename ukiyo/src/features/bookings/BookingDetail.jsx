import { useNavigate } from "react-router-dom";
import Tag from "../../ui/Tag";
import BookingDataBox from "./BookingDataBox";
import useBookingId from "./useBookingId";
import styled from "styled-components";
import Loader from "../../ui/Loader";
import { useCheckout } from "../check-in-out/useCheckout";

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

const CheckInOutBtn = styled.button`
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

function BookingDetail() {
  const { booking, isLoading } = useBookingId();
  const { checkout, isCheckingOut } = useCheckout();
  const navigate = useNavigate();

  if (isLoading || isCheckingOut) return <Loader />;

  const { id, status } = booking;

  const statusColor = {
    unconfirmed: "light",
    "checked-in": "success",
    "checked-out": "dark",
  };

  return (
    <>
      <Header>
        <HeaderInfo>
          <h1>Booking #{id}</h1>
          <Tag type={statusColor[status]}>{status.replace("-", " ")}</Tag>
        </HeaderInfo>
        <BackBtn onClick={() => navigate(-1)}>← Back</BackBtn>
      </Header>
      <BookingDataBox booking={booking} />
      <BtnsWrapper>
        {booking.status === "unconfirmed" && (
          <CheckInOutBtn onClick={() => navigate(`/check-in/${id}`)}>
            Check in
          </CheckInOutBtn>
        )}
        {status === "checked-in" && (
          <CheckInOutBtn onClick={() => checkout(id)} disabled={isCheckingOut}>
            Check out
          </CheckInOutBtn>
        )}
        <BackLowBtn onClick={() => navigate(-1)}>Back</BackLowBtn>
      </BtnsWrapper>
    </>
  );
}

export default BookingDetail;
