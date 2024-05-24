import { axios } from "~src/libs";

export function getProjects() {
  return axios.get("api/projects");
}
