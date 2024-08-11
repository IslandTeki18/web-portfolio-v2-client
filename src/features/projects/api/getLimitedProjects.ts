import axios from "axios";
import { API_URL, NODE_ENV, DEV_URL } from "~src/config";

const URL = NODE_ENV === "development" ? DEV_URL : API_URL;

export function getLimitedProjects() {
  return axios.get(`${URL}api/projects/limited`);
}
