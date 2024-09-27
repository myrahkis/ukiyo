import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditRoom } from "../../services/apiRooms";
import toast from "react-hot-toast";

export function useEditRoom() {
  const queryClient = useQueryClient();

  const { mutate: editRoom, isPending: isEditing } = useMutation({
    mutationFn: ({ newRoomData, id }) => createEditRoom(newRoomData, id),
    onSuccess: () => {
      toast.success("The room was edited!");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: () => {
      toast.error("Failed to edit the room!");
    },
  });

  return { isEditing, editRoom };
}
