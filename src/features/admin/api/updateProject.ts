import axios from "axios";
import { API_URL } from "~src/config";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEVELOPMENT_URL
    : API_URL;

export const updateProject = async (projectData: any, projectId: string) => {
  const userToken = localStorage.getItem("authToken");
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    const { data } = await axios.put(
      `${url}api/projects/${projectId}`,
      projectData,
      config
    );

    return data;
  } catch (error) {
    console.error(`Error sending updating project: ${error}`);
    return;
  }
};
