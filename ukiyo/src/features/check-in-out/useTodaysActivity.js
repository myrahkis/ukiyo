import { useQuery } from "@tanstack/react-query";
import { getStaysTodaysActivity } from "../../services/apiBookings";

function useTodaysActivity() {
  const { data: activities, isLoading } = useQuery({
    queryKey: ["todays-activity"],
    queryFn: getStaysTodaysActivity,
  });

  return { activities, isLoading };
}

export default useTodaysActivity;
