import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignUp() {
  const { mutate: signUpMut, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account was successfully created! Please, verify it from user's email address."
      );
    },
    // onError: (err) => {
    //   console.error(err);
    //   toast.error("Couldn't create new user");
    // },
  });

  return { signUpMut, isPending };
}

export default useSignUp;
