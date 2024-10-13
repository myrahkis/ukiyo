import styled from "styled-components";
import useTodaysActivity from "./useTodaysActivity";
import Loader from "../../ui/Loader";
import TodayItem from "./TodayItem";
import { isToday } from "date-fns";

const StyledToday = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 2;
  gap: 2.5rem;
  background-color: var(--lightest-bg-color);
  color: var(--dark-text-color);
  padding: 1.5rem 2rem;
  border-radius: 1rem;
`;

const TodayList = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

function TodaysActivity() {
  const { activities, isLoading } = useTodaysActivity();

  // @to-do: разобраться в чем проблем c or и переделать в запрос потом
  const todayData = activities?.filter(
    (booking) =>
      (booking.status === "unconfirmed" &&
        isToday(new Date(booking.startDate))) ||
      (booking.status === "checked-in" && isToday(new Date(booking.endDate)))
  );

  return (
    <StyledToday>
      <h3>Today</h3>
      {!isLoading ? (
        todayData?.length > 0 ? (
          <TodayList>
            {todayData.map((activity) => (
              <TodayItem key={activity.id} item={activity} />
            ))}
          </TodayList>
        ) : (
          <NoActivity>No activity today...</NoActivity>
        )
      ) : (
        <Loader />
      )}
    </StyledToday>
  );
}

export default TodaysActivity;
