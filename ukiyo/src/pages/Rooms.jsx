import styled from "styled-components";
import RoomTable from "../features/rooms/RoomTable";
import Row from "../ui/Row";

function Rooms() {
  return (
    <div>
      <Row>
        <h1>All rooms</h1>
        <button>Filter/sort</button>
      </Row>
      <RoomTable />
    </div>
  );
}

export default Rooms;
