import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditRoom } from "../../services/apiRooms";
import toast from "react-hot-toast";

export function useCreateRoom() {
  const queryClient = useQueryClient();

  const { mutate: createRoom, isPending: isCreating } = useMutation({
    mutationFn: createEditRoom,
    onSuccess: () => {
      toast.success("New room was added!");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: () => {
      toast.error("Failed to add a new room!");
    },
  });

  return { isCreating, createRoom };
}
