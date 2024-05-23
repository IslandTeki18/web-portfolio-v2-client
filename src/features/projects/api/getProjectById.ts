import { axios } from "~src/libs";

export function getProjectById(id: string) {
  return axios.get(`/api/projects/${id}`);
}
