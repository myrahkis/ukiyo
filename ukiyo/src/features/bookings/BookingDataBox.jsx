/* eslint-disable react/prop-types */
import { format, isToday } from "date-fns";
import { formatDistanceFromNow } from "../../utils/helpers";
import styled from "styled-components";

const Header = styled.div``;

const Guest = styled.div``;

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
    guests: { fullName, email, nationality, countryFlag, nationalId },
  },
}) {
  return (
    <div>
      <Header>
        <div>
          <p>
            {numNights} nights in room <span>{name}</span>
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
      <section>
        <Guest>
          {countryFlag && (
            <Flag src={countryFlag} alt={`Flag of ${nationality}`} />
          )}
          <p>
            {fullName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID: {nationalId}</p>
        </Guest>

        {/* {observations && } */}
      </section>
    </div>
  );
}

export default BookingDataBox;
