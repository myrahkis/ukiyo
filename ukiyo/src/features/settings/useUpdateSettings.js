import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSettings } from "../../services/apiSettings";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updSettings, isPending: isUpdating } = useMutation({
    mutationFn: updateSettings,
    onSuccess: () => {
      toast.success("The setting was updated!");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: () => {
      toast.error("Failed to update the setting!");
    },
  });

  return { isUpdating, updSettings };
}
