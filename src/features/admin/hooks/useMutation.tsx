import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "~src/hooks";

export const useMutation = (url: string) => {
  const { user } = useAuthContext();
  const [state, setState] = useState({
    isLoading: false,
    error: null,
  });

  const mutate = async (body: any) => {
    setState((prev) => {
      return { ...prev, isLoading: true };
    });
    try {
      await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
      });
    } catch (error) {
      setState({ isLoading: false, error: error.message });
    } finally {
      setState((prev) => {
        return { ...prev, isLoading: false };
      });
    }
  };

  return { ...state, mutate };
};
