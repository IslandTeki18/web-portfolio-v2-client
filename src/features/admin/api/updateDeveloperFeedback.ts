import axios from "axios";
import { API_URL } from "~src/config";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEVELOPMENT_URL
    : API_URL;

export async function updateDeveloperFeedback(
  projectId: string,
  feedbackId: string,
  feedbackObj: { title: string; description: string }
) {
  const userToken = localStorage.getItem("authToken");
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    const { data } = await axios.put(
      `${url}api/projects/${projectId}/${feedbackId}/edit`,
      feedbackObj,
      config
    );
    return data;
  } catch (error) {
    console.error("Error when updating developer feedback: ", error);
  }
}
