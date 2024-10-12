import styled from "styled-components";
import useRecentBooking from "./useRecentBookings";
import Loader from "../../ui/Loader";
import useRecentStays from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.5rem;
`;

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBooking();
  const { stays, isLoadingStays, confirmedStays } = useRecentStays();

  const isWorking = isLoading || isLoadingStays;

  if (isWorking) return <Loader />;

//   console.log(bookings);
//   console.log(confirmedStays);

  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today&apos;s activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
