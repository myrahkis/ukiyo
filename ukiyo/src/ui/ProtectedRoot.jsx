/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useUser from "../features/auth/useUser";
import Loader from "./Loader";
import { useEffect } from "react";

function ProtectedRoot({ children }) {
  const { user, isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading) return <Loader />;

  if (isAuthenticated) return children;
}

export default ProtectedRoot;
