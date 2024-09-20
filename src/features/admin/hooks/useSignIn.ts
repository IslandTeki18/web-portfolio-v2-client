import { useState } from "react";
import { useAuthContext } from "~src/hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/loginUser";

export const useSignIn = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const signIn = async (username: string, password: string) => {
    setIsLoading(true);
    if (error !== "") setError("");
    try {
      const res = await loginUser(username, password);
      if (res.data) {
        login(res.data);
        navigate("/admin/projects");
      }
    } catch (error) {
      console.error("Error signing in: ", error.message);
      if (error.response) {
        setError(error.response.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { signIn, error, isLoading };
};
