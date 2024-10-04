import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getRooms } from "../../services/apiRooms";
import { MAX_ROWS } from "../../utils/constants";

function useRooms() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: rooms, count } = {},
    error,
  } = useQuery({
    queryKey: ["rooms", page],
    queryFn: () => getRooms({ page }),
  });

  // pre-fetching
  const pageCount = Math.ceil(count / MAX_ROWS);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["rooms", page + 1],
      queryFn: () => getRooms({ page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["rooms", page - 1],
      queryFn: () => getRooms({ page: page - 1 }),
    });
  }

  return { isLoading, rooms, count, error };
}

export default useRooms;
