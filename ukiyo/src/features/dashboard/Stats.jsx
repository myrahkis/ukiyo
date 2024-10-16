/* eslint-disable react/prop-types */
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { FaCalendarCheck, FaChartLine } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import Stat from "./Stat";

function Stats({ bookings, confirmedStays, numDays, roomCount }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checking = confirmedStays.length;

  // num checked in nights / all available nights
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * roomCount);

  return (
    <>
      <Stat
        title="Bookings"
        color={"var(--emphasis-color)"}
        icon={<BsFillSuitcase2Fill />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color={"var(--success-color)"}
        icon={<GrMoney />}
        value={`$${sales}`}
      />
      <Stat
        title="Check ins"
        color={"var(--light-danger-color)"}
        icon={<FaCalendarCheck />}
        value={checking}
      />
      <Stat
        title="Occupancy rate"
        color={"var(--purple-color)"}
        icon={<FaChartLine />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
