/* eslint-disable react/prop-types */
import { format, isToday } from "date-fns";
import { formatDistanceFromNow } from "../../utils/helpers";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import { MdDelete } from "react-icons/md";
import { useDarkMode } from "../../context/DarkModeContext";
import { device } from "../../styles/adaptability";
import styled from "styled-components";
import TableRow from "../../ui/TableRow";
import Menus from "../../ui/Menus";
import MenuBtn from "../../ui/MenuBtn";
import Tag from "../../ui/Tag";
import Loader from "../../ui/Loader";
import useDeleteBooking from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import DeleteBtn from "../../ui/DeleteBtn";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Room = styled.p`
  @media ${device.mobile} {
    width: 12rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    width: 16rem;
  }
`;

const Price = styled.div``;

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
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBookingMut, isDeleting } = useDeleteBooking();
  const navigate = useNavigate();
  const { isDark } = useDarkMode();

  const statusColor = {
    unconfirmed: "light",
    "checked-in": "success",
    "checked-out": "dark",
  };

  if (isCheckingOut || isDeleting) return <Loader />;

  function deleteHandle() {
    deleteBookingMut(id);
  }

  const btnIconStyle = { color: "var(--light-text-color)", marginRight: "5px" };

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
          icon={
            <BsThreeDotsVertical
              style={{
                fontSize: "2rem",
                color: isDark && "var(--light-text-color)",
              }}
            />
          }
        />
        <Menus.List id={id}>
          <Menus.Button>
            <MenuBtn onClick={() => navigate(`/bookings/${id}`)}>
              <CgDetailsMore /> See details
            </MenuBtn>
          </Menus.Button>
          {status === "unconfirmed" && (
            <Menus.Button>
              <MenuBtn onClick={() => navigate(`/check-in/${id}`)}>
                <FaBuildingCircleCheck /> Check in
              </MenuBtn>
            </Menus.Button>
          )}
          {status === "checked-in" && (
            <Menus.Button>
              <MenuBtn onClick={() => checkout(id)} disabled={isCheckingOut}>
                <HiOutlineArrowUpOnSquare /> Check out
              </MenuBtn>
            </Menus.Button>
          )}
          <Menus.Button>
            <Modal>
              <Modal.Open opens="delete-confirm">
                <DeleteBtn onClick={deleteHandle} disabled={isDeleting}>
                  <MdDelete style={btnIconStyle} />
                  Delete
                </DeleteBtn>
              </Modal.Open>
              <Modal.Window name="delete-confirm">
                <ConfirmDelete
                  subject={name}
                  onConfirm={deleteHandle}
                  disabled={isDeleting}
                />
              </Modal.Window>
            </Modal>
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </TableRow>
  );
}

export default BookingRow;
