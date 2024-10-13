import styled from "styled-components";
import useRecentBooking from "./useRecentBookings";
import Loader from "../../ui/Loader";
import useRecentStays from "./useRecentStays";
import Stats from "./Stats";
import useRooms from "../rooms/useRooms";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodaysActivity from "../check-in-out/TodaysActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.5rem;
`;

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBooking();
  const { stays, isLoadingStays, confirmedStays, numDays } = useRecentStays();
  const { rooms, isLoading: isLoadingRooms } = useRooms();

  const isWorking = isLoading || isLoadingStays || isLoadingRooms;

  if (isWorking) return <Loader />;

  // console.log(bookings);
  //   console.log(confirmedStays);

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        roomCount={rooms.length}
      />
      <TodaysActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
