import axios from "axios";
import { API_URL, DEV_API_URL, NODE_ENV } from "~src/config";

const URL = NODE_ENV === "development" ? DEV_API_URL : API_URL;

export const loginUser = async (username: string, password: string) => {
  const res = axios.post(
    `${URL}/users/login`,
    {
      username,
      password,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return res;
};
