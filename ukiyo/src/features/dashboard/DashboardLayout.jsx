import { device } from "../../styles/adaptability";
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

  @media ${device.desktop} {
    grid-template-rows: auto 30rem auto;
    gap: 1.5rem;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 24rem auto;
    gap: 1rem;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;
    gap: 1rem;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;
    gap: 1rem;
  }
`;

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBooking();
  const { isLoadingStays, confirmedStays, numDays } = useRecentStays();
  const { rooms, isLoading: isLoadingRooms } = useRooms();

  const isWorking = isLoading || isLoadingStays || isLoadingRooms;

  if (isWorking) return <Loader />;

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
