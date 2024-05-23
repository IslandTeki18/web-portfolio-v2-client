import axios from "axios";
import { API_URL } from "~src/config";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEVELOPMENT_URL
    : API_URL;

export function uploadImages(id: string, image: FormData) {
  try {
    return axios.post(`${url}api/upload/${id}`, image, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    throw new Error(error);
  }
}
