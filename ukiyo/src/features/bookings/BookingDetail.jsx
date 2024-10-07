import { useNavigate } from "react-router-dom";
import Tag from "../../ui/Tag";
import BookingDataBox from "./BookingDataBox";
import useBookingId from "./useBookingId";
import styled from "styled-components";
import Loader from "../../ui/Loader";
import { useCheckout } from "../check-in-out/useCheckout";
import Modal from "../../ui/Modal";
import DeleteBtn from "../../ui/DeleteBtn";
import { MdDelete } from "react-icons/md";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteBooking from "./useDeleteBooking";

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

const Delete = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 1rem;
  background-color: var(--danger-color);
  color: var(--light-text-color);

  &:hover {
    background-color: var(--dark-danger-color);
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
  const { deleteBookingMut, isDeleting } = useDeleteBooking();
  const navigate = useNavigate();

  if (isLoading || isCheckingOut || isDeleting) return <Loader />;

  const { id, status } = booking;

  const statusColor = {
    unconfirmed: "light",
    "checked-in": "success",
    "checked-out": "dark",
  };

  function deleteHandle() {
    deleteBookingMut(id);
  }

  const btnIconStyle = { color: "var(--light-text-color)", marginRight: "5px" };

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
        <Modal>
          <Modal.Open opens="delete-confirm">
            <Delete onClick={deleteHandle} disabled={isDeleting}>
              <MdDelete style={btnIconStyle} />
              Delete
            </Delete>
          </Modal.Open>
          <Modal.Window name="delete-confirm">
            <ConfirmDelete
              subject={id}
              onConfirm={deleteHandle}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
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
