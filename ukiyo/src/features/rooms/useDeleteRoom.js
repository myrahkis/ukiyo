import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRoom } from "../../services/apiRooms";
import toast from "react-hot-toast";

export function useDeleteRoom() {
  const queryClient = useQueryClient();

  const { mutate: deleteRoomMut, isPending: isDeleting } = useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
      toast.success("You've successfully deleted the room!");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (e) => toast.error(e.message),
  });

  return { isDeleting, deleteRoomMut };
}
