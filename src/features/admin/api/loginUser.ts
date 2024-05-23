import { axios } from "~src/libs";

export function loginUser(username: string, password: string) {
  return axios.post("/api/users/login", { username, password });
}