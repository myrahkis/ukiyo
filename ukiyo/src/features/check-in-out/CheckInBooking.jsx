import { useNavigate } from "react-router-dom";
import BookingDataBox from "../bookings/BookingDataBox";
import useBookingId from "../bookings/useBookingId";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Checkbox from "../../ui/Checkbox";
import Loader from "../../ui/Loader";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";

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

const Box = styled.div`
  display: flex;
  margin-top: 1rem;
  padding: 2rem 2.5rem;
  color: var(--dark-text-color);
  background-color: var(--lightest-bg-color);
  border-radius: 1rem;
`;

function CheckInBooking() {
  const [confirmPayment, setConfirmPayment] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const navigate = useNavigate();
  const { booking, isLoading } = useBookingId();
  const { settings, isLoading: isLoadingSettings } = useSettings();
  const { checkin, isCheckingIn } = useCheckin();

  useEffect(
    function () {
      setConfirmPayment(booking?.isPaid ?? false);
    },
    [booking]
  );

  const isWorking = isLoading || isCheckingIn || isLoadingSettings;

  if (isWorking) return <Loader />;

  const {
    id,
    guests,
    totalPrice,
    roomPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
    settings.breakfastPrice * numGuests * numNights;

  function checkInHandle() {
    if (!confirmPayment) return;

    if (addBreakfast) {
      checkin({
        id,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: numNights * roomPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ id, breakfast: {} });
    }
  }

  return (
    <>
      <Header>
        <HeaderInfo>
          <h1>Checking in booking #{booking.id}</h1>
        </HeaderInfo>
        <BackBtn onClick={() => navigate(-1)}>Back</BackBtn>
      </Header>
      <BookingDataBox booking={booking} />
      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPayment(false);
            }}
            id="breakfast"
          >
            Want to add breakfast for ${optionalBreakfastPrice}?
          </Checkbox>
        </Box>
      )}
      <Box>
        <Checkbox
          checked={confirmPayment}
          onChange={() => setConfirmPayment((confirm) => !confirm)}
          id="confirm"
          disabled={confirmPayment}
        >
          I confirm that {guests.fullName} has paid for the booking.
        </Checkbox>
      </Box>
      <BtnsWrapper>
        <CheckInBtn
          onClick={checkInHandle}
          disabled={!confirmPayment || isCheckingIn}
        >
          Check in booking #{id}
        </CheckInBtn>
        <BackLowBtn onClick={() => navigate(-1)}>Back</BackLowBtn>
      </BtnsWrapper>
    </>
  );
}

export default CheckInBooking;
