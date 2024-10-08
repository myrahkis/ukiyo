import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();

  const { mutate: loginMut, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: () => {
      navigate("/");
    },
    onError: () => {
      toast.error('Email or password is invalid.');
    },
  });

  return { loginMut, isLoggingIn };
}

export default useLogin;
