/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";
import Tag from "../../ui/Tag";

const StyledTodayItem = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 9rem 2rem 0.7fr 7rem 7rem;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.2rem;
  border-bottom: 1px dashed var(--main-color);

  &:first-child {
    border-top: 1px dashed var(--main-color);
  }
`;

const Guest = styled.p``;

const Flag = styled.img``;

const Button = styled.button`
  width: fit-content;
  text-decoration: none;
  padding: 1rem;
  border-radius: 1.5rem;
  font-size: 1.2rem;
  background-color: var(--emphasis-color);
  color: var(--light-text-color);

  &:visited {
    color: var(--light-text-color);
  }
  &:hover {
    background-color: var(--dark-emphasis-color);
    transition: background-color 0.3s;
  }
`;

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
