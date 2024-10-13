import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingAfterDate } from "../../services/apiBookings";

function useRecentBooking() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last") ? 7 : +searchParams.get("last");

  const queryData = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["stays", `last-${numDays}`],
    queryFn: () => getBookingAfterDate(queryData),
  });

  return { bookings, isLoading };
}

export default useRecentBooking;
