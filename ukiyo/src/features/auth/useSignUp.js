import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignUp() {
  const { mutate: signUpMut, isPending } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signUp({ fullName, email, password }),
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account was successfully created! Please, verify it from user's email address."
      );
    },
  });

  return { signUpMut, isPending };
}

export default useSignUp;
