import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";

function useBooking() {
  const [searchParams] = useSearchParams();

  // filter
  const filterValue = searchParams.get("status");
  let filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // sorting
  const sortByRaw = searchParams.get("sortBy") || "startDate-asc";
  let [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, bookings, count, error };
}

export default useBooking;
