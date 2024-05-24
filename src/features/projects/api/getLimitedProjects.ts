import { axios } from "~src/libs";

export function getLimitedProjects() {
  return axios.get(`api/projects/limited`);
}
