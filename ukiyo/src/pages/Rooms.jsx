import { useEffect } from "react";
import { getRooms } from "../services/apiRooms";

function Rooms() {
  useEffect(function () {
    getRooms().then((data) => console.log(data));
  }, []);
  
  return (
    <div>
      <h1>Rooms</h1>
    </div>
  );
}

export default Rooms;
