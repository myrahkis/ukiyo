import styled from "styled-components";
import RoomTable from "../features/rooms/RoomTable";
import AddRoom from "../features/rooms/AddRoom";
import RoomTableOperations from "../features/rooms/RoomTableOperations";

const Heading = styled.div`
  display: flex;
  margin-bottom: 3rem;
  justify-content: space-between;
`;

function Rooms() {
  return (
    <div>
      <Heading>
        <h1>All rooms</h1>
        <RoomTableOperations />
      </Heading>
      <RoomTable />
      <AddRoom />
    </div>
  );
}

export default Rooms;
