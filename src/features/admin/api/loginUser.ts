import { axios } from "~src/libs";

export function loginUser(email: string, password: string) {
  return axios.post("/api/users/login", { email, password });
}