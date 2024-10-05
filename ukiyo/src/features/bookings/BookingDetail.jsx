import { useNavigate } from "react-router-dom";
import Row from "../../ui/Row";
import Tag from "../../ui/Tag";
import BookingDataBox from "./BookingDataBox";
import useBookingId from "./useBookingId";
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

function BookingDetail() {
  const { booking, isLoading } = useBookingId();
  const navigate = useNavigate();

  if (isLoading) return <h1>Loading...</h1>;

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
          <CheckInBtn onClick={() => navigate(`/check-in/${id}`)}>
            Check in
          </CheckInBtn>
        )}
        <BackLowBtn onClick={() => navigate(-1)}>Back</BackLowBtn>
      </BtnsWrapper>
    </>
  );
}

export default BookingDetail;
