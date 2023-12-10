import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEVELOPMENT_URL
    : process.env.REACT_APP_SERVER_URL;

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
