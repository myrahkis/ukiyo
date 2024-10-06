/* eslint-disable react/prop-types */
import { format, isToday } from "date-fns";
import { formatDistanceFromNow } from "../../utils/helpers";
import styled, { css } from "styled-components";
import { PiBookOpenTextLight } from "react-icons/pi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoPricetagsOutline } from "react-icons/io5";

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

const Section = styled.section`
  /* padding: 2rem; */
`;

const GuestWrapper = styled.div`
  display: flex;
  padding: 0 2.5rem;
  padding-top: 1rem;
  gap: 1rem;
`;

const Guest = styled.p`
  font-weight: 500;
`;

const GuestDetails = styled.div`
  display: inherit;
  gap: 1rem;
  color: var(--main-color);
`;

const Observations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 2.5rem;
`;

const Breakfast = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 2.5rem;
  ${(props) =>
    props.hastoppadding &&
    css`
      padding-top: 0;
    `}
`;

const Label = styled.div`
  font-weight: 500;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 2.5rem;
  margin: 0 2.5rem;
  /* margin-bottom: 2rem; */
  border-radius: 1rem;
  background-color: var(--light-success-color);
  color: var(--dark-success-color);
`;

const Price = styled.div`
  display: inherit;
  gap: 1.5rem;
`;

const Paid = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.3rem;
`;

const CreatedTime = styled.div`
  display: flex;
  justify-content: end;
  padding: 2rem 2.5rem;
  margin-top: 1rem;
`;

const P = styled.p`
  color: var(--main-color);
  font-size: 1.2rem;
`;

const Flag = styled.img``;

function BookingDataBox({
  booking: {
    created_at,
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
  const breakfastPrice = hasBreakfast ? extrasPrice * numNights : 0;
  const totalPriceRight = roomPrice * numNights + breakfastPrice;
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
        <GuestWrapper>
          {countryFlag && (
            <Flag src={`https://flagsapi.com/${countryFlag}/flat/16.png`} alt={`Flag of ${nationality}`} />
          )}
          <Guest>
            {fullName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </Guest>
          <GuestDetails>
            <span>&bull;</span>
            <p>{email}</p>
            <span>&bull;</span>
            <p>National ID {nationalID}</p>
          </GuestDetails>
        </GuestWrapper>

        {observations && (
          <Observations>
            <Label>
              <PiBookOpenTextLight /> <span>Observations</span>
            </Label>
            <p> {observations}</p>
          </Observations>
        )}
        <Breakfast hastoppadding={observations}>
          <Label>
            <IoIosCheckmarkCircleOutline /> <span>Breakfast included?</span>
          </Label>
          <p>{hasBreakfast === true ? "Yes" : "No"}</p>
        </Breakfast>
        <PriceWrapper>
          <Price style={{ display: "flex" }}>
            <Label>
              <IoPricetagsOutline /> <span>Total price</span>
            </Label>
            <p>
              ${totalPriceRight} (${roomPrice * numNights} room{" "}
              {hasBreakfast && `+ ${extrasPrice * numNights} breakfast`})
            </p>
          </Price>
          <Paid>{isPaid === true ? "Paid" : "Not paid"}</Paid>
        </PriceWrapper>
        <CreatedTime>
          <P>Booked on {format(created_at, "MMM dd yyyy, H:mm")}</P>
        </CreatedTime>
      </Section>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
