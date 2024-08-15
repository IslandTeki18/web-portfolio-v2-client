import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "~src/hooks/useAuthContext";
import { useEffect } from "react";

export const ProtectedRoute = ({
  element,
}: {
  element: React.ReactElement;
}) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (user === null) return <div>Checking authentication...</div>;

  return element;
};
