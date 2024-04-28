import axios from "axios";
import { API_URL } from "~src/config";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEVELOPMENT_URL
    : API_URL;

export async function removeDeveloperFeedback(
  feedbackId: string,
  projectId: string
) {
  const userToken = localStorage.getItem("authToken");
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    const { data } = await axios.delete(
      `${url}api/projects/${projectId}/${feedbackId}`,
      config
    );
    return data;
  } catch (error) {
    console.error("Error removing developer feedback: ", error);
  }
}
