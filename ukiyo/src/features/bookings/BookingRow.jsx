/* eslint-disable react/prop-types */
import { format, isToday } from "date-fns";
import styled from "styled-components";
import { formatDistanceFromNow } from "../../utils/helpers";
import TableRow from "../../ui/TableRow";

const Room = styled.p``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.div``;

const Tag = styled.div`
  width: fit-content;
  padding: 1rem 1.5rem;
  border-radius: 1.5rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  background-color: var(--${(props) => props.type}-emphasis-color);
  color: var(--light-text-color);
`;

function BookingRow({
  booking: {
    id,
    startDate,
    endDate,
    numNights,
    numGuests,
    status,
    totalPrice,
    rooms: { name },
    guests: { fullName, email },
  },
}) {
  const statusColor = {
    unconfirmed: "light",
    "checked-in": "success",
    "checked-out": "dark",
  };

  return (
    <TableRow role="row" columns="2fr 1fr 1.5fr 1fr 0.6fr">
      <Room>{name}</Room>
      <Wrapper>
        <p>{fullName}</p>
        <p>{email}</p>
      </Wrapper>
      <Wrapper>
        <p>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </p>
        <p>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </p>
      </Wrapper>
      <Tag type={statusColor[status]}>{status.replace("-", " ")}</Tag>
      <Price>${totalPrice}</Price>
    </TableRow>
  );
}

export default BookingRow;
