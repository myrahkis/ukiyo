import { device } from "../../styles/adaptability";
import styled from "styled-components";
import useTodaysActivity from "./useTodaysActivity";
import Loader from "../../ui/Loader";
import TodayItem from "./TodayItem";

const StyledToday = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 2;
  gap: 2.5rem;
  background-color: var(--lightest-bg-color);
  color: var(--dark-text-color);
  padding: 1.5rem 2rem;
  border-radius: 1rem;

  @media ${device.mobile} {
    grid-column: 1 / -1;
  }
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

  return (
    <StyledToday>
      <h3>Today</h3>
      {!isLoading ? (
        activities?.length > 0 ? (
          <TodayList>
            {activities.map((activity) => (
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
