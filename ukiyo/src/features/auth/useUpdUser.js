import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useUpdUser() {
  const queryClient = useQueryClient();

  const { mutate: updUserMut, isPending } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      toast.success("User was successfully updated");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updUserMut, isPending };
}

export default useUpdUser;
