/* eslint-disable react/prop-types */
import { format, isToday } from "date-fns";
import styled from "styled-components";
import { formatDistanceFromNow } from "../../utils/helpers";
import TableRow from "../../ui/TableRow";
import Menus from "../../ui/Menus";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import MenuBtn from "../../ui/MenuBtn";
import { useNavigate } from "react-router-dom";
import Tag from "../../ui/Tag";

const Room = styled.p``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.div``;

const iconStyle = { fontSize: "2rem" };

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
  const navigate = useNavigate();

  const statusColor = {
    unconfirmed: "light",
    "checked-in": "success",
    "checked-out": "dark",
  };

  return (
    <TableRow role="row" columns="2fr 1fr 1.5fr 0.9fr 0.4fr 0.2fr">
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
      <Menus.Menu>
        <Menus.Toggle
          id={id}
          icon={<BsThreeDotsVertical style={iconStyle} />}
        />
        <Menus.List id={id}>
          <Menus.Button>
            <MenuBtn onClick={() => navigate(`/bookings/${id}`)}>
              <CgDetailsMore /> See details
            </MenuBtn>
          </Menus.Button>
          {status === 'unconfirmed' && <Menus.Button>
            <MenuBtn onClick={() => navigate(`/bookings/${id}`)}>
              <FaBuildingCircleCheck /> Check in
            </MenuBtn>
          </Menus.Button>}
        </Menus.List>
      </Menus.Menu>
    </TableRow>
  );
}

export default BookingRow;
