import RoomTable from "../features/rooms/RoomTable";
import AddRoom from "../features/rooms/AddRoom";
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
      <AddRoom />
    </div>
  );
}

export default Rooms;
