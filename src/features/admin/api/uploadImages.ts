import axios from "axios";

export function uploadImages(projectId: string, image: FormData) {
  return axios.post(`/api/upload/${projectId}`, image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
