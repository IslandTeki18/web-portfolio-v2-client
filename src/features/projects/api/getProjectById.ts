import axios from "axios";
import { API_URL, NODE_ENV, DEV_URL } from "~src/config";

const URL = NODE_ENV === "development" ? DEV_URL : API_URL;

export function getProjectById(id: string) {
  return axios.get(`${URL}api/projects/${id}`);
}
