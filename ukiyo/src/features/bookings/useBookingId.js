import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

function useBookingId() {
  const { id } = useParams();
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({ queryKey: ["booking"], queryFn: () => getBooking(id) });

  return { booking, isLoading, error };
}
export default useBookingId;
