import axios from "axios";
import { API_URL } from "~src/config";
import { storage } from "~src/utils";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEVELOPMENT_URL
    : API_URL;

export const updateProject = async (projectData: any, projectId: string) => {
  const user = storage.getUserInfo();
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
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
