import axios from "axios";

export function loginUser(username: string, password: string) {
  return axios.post("/api/users/login", { username, password });
}
