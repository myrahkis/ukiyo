/* eslint-disable react/prop-types */
import { format, isToday } from "date-fns";
import { formatDistanceFromNow } from "../../utils/helpers";
import styled from "styled-components";

const StyledBookingDataBox = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  background-color: var(--lightest-bg-color);
  color: var(--dark-text-color);
  border-radius: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.5rem;
  background-color: var(--emphasis-color);
  color: var(--light-text-color);
`;

const Section = styled.section``;

const Guest = styled.div`
  display: flex;
  padding: 0 2.5rem;
  gap: 1rem;
`;

const GuestDetails = styled.div`
  display: inherit;
  gap: 1rem;
  color: var(--main-color);
`;

const Observations = styled.div``;

const Flag = styled.img``;

function BookingDataBox({
  booking: {
    startDate,
    endDate,
    numNights,
    numGuests,
    roomPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    isPaid,
    observations,
    rooms: { name, img },
    guests: { fullName, email, nationality, countryFlag, nationalID },
  },
}) {
  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <p>
            {numNights} nights in room{" "}
            <span>
              <strong>{name}</strong>
            </span>
          </p>
        </div>
        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </Header>
      <Section>
        <Guest>
          {countryFlag && (
            <Flag src={countryFlag} alt={`Flag of ${nationality}`} />
          )}
          <p>
            {fullName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>
          <GuestDetails>
            <span>&bull;</span>
            <p>{email}</p>
            <span>&bull;</span>
            <p>National ID {nationalID}</p>
          </GuestDetails>
        </Guest>

        {observations && 
        <Observations>
            <p>Observations {observations}</p>
        </Observations>
        }
      </Section>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
