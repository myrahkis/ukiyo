import { useQuery } from "@tanstack/react-query";
import { getStaysTodaysActivity } from "../../services/apiBookings";
import { isToday } from "date-fns";

function useTodaysActivity() {
  const { data, isLoading } = useQuery({
    queryKey: ["todays-activity"],
    queryFn: getStaysTodaysActivity,
  });

  // @to-do: разобраться в чем проблем c or и переделать в запрос потом
  const activities = data?.filter(
    (booking) =>
      (booking.status === "unconfirmed" &&
        isToday(new Date(booking.startDate))) ||
      (booking.status === "checked-in" && isToday(new Date(booking.endDate)))
  );

  return { activities, isLoading };
}

export default useTodaysActivity;
