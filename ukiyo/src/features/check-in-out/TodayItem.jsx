/* eslint-disable react/prop-types */
import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Link } from "react-router-dom";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 6rem;
  gap: 1.2rem;
  align-items: center;
  padding: 0.8rem 1.2rem;
  border-bottom: 1px dashed var(--main-color);

  &:first-child {
    border-top: 1px dashed var(--main-color);
  }
`;

const Guest = styled.p``;

const Flag = styled.img``;

const Button = styled.button``;

function TodayItem({ item }) {
  const { id, status, guests, numNights } = item;
  const { fullName, nationality, countryFlag } = guests;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="success">Arriving</Tag>}
      {status === "checked-in" && <Tag type="dark">Departing</Tag>}
      <Flag
        src={`https://flagsapi.com/${countryFlag}/flat/24.png`}
        alt={`Flag of ${nationality}`}
      />
      <Guest>{fullName}</Guest>
      <div>{numNights} nights</div>
      {status === "unconfirmed" && (
        <Button as={Link} to={`/check-in/${id}`}>
          Check-in
        </Button>
      )}
      {status === "checked-in" && (
        <Button as={Link} to={`/check-out/${id}`}>
          Check-out
        </Button>
      )}
    </StyledTodayItem>
  );
}

export default TodayItem;
