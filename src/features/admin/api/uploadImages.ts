import axios from "axios"
import { API_URL } from "~src/config"

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEVELOPMENT_URL
    : API_URL;

export function uploadImages(id: string, images: File[]) {
    try {
        const formData = new FormData()
        images.forEach((image) => {
            formData.append("images", image)
        })
        return axios.post(`${url}api/upload/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
    } catch (error) {
        throw new Error(error)
    }
}