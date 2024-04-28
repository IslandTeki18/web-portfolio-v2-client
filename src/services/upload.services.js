import axios from "axios";
import { API_URL } from "~src/config";

const req =
  process.env.NODE_ENV === "production"
    ? `${API_URL}api/upload`
    : `http://localhost:3001/api/upload`;

const upload = (file, onUploadProgress) => {
  let formData = new FormData();
  formData.append("project-image", file);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  };
  return axios.post(req, formData, config);
};

export { upload };
