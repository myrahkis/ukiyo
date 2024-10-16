import styled from "styled-components";
import RoomTable from "../features/rooms/RoomTable";
import RoomTableOperations from "../features/rooms/RoomTableOperations";
import Heading from "../ui/Heading";

const H1 = styled.h1`
  width: 100%;
  text-align: start;
`;

function Rooms() {
  return (
    <div>
      <Heading>
        <H1>All rooms</H1>
        <RoomTableOperations />
      </Heading>
      <RoomTable />
    </div>
  );
}

export default Rooms;
