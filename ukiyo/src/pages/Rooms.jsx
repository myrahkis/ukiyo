import RoomTable from "../features/rooms/RoomTable";
import RoomTableOperations from "../features/rooms/RoomTableOperations";
import Heading from "../ui/Heading";

function Rooms() {
  return (
    <div>
      <Heading>
        <h1>All rooms</h1>
        <RoomTableOperations />
      </Heading>
      <RoomTable />
      
    </div>
  );
}

export default Rooms;
