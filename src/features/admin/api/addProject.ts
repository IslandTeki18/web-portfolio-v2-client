import axios from "axios";
import { API_URL } from "~src/config";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEVELOPMENT_URL
    : API_URL;

export async function addProject() {
  const userToken = localStorage.getItem("authToken");
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    await axios.post(`${url}api/projects`, {}, config);
    return;
  } catch (error) {
    console.error(`Error creating new project: ${error}`);
    return;
  }
}
