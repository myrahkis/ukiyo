/* eslint-disable react/prop-types */
import styled from "styled-components";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 2fr 1.2fr 0.8fr 0.8fr 0.6fr;
  column-gap: 2rem;
  align-items: center;
  padding: 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--emphasis-color);
  }
  color: var(--dark-text-color);
  &:hover:nth-child()
`;

const Img = styled.img`
  display: block;
  width: 11rem;
  height: 9rem;
`;

function RoomRow({ room }) {
  const { name, maxCapacity, regularPrice, discount, img } = room;

  return (
    <TableRow role="row">
      <Img src={img} />
      <div>{name}</div>
      <div>Fits up to {maxCapacity} people</div>
      <div>{regularPrice}</div>
      <div>{discount}</div>
      <button>Delete</button>
    </TableRow>
  );
}

export default RoomRow;
