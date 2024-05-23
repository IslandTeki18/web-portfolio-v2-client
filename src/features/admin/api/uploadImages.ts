import { axios } from "~src/libs";

export function uploadImages(projectId: string, image: FormData) {
  return axios.post(`/api/upload/${projectId}`, image);
}
