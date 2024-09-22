import axios from "axios";
import { PRODUCTION_URL, DEVELOPMENT_URL, NODE_ENV } from "~src/config";

const URL = NODE_ENV === "development" ? DEVELOPMENT_URL : PRODUCTION_URL;

export const loginUser = async (username: string, password: string) => {
  const res = axios.post(
    `${URL}users/login`,
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
