import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { projectDetailsState } from "../api";
import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEVELOPMENT_URL
    : process.env.REACT_APP_SERVER_URL;

export const useGetProjectDetails = (projectId: string) => {
  const setProjectDetails = useSetRecoilState(projectDetailsState);

  useEffect(() => {
    getProjectDetails();
  }, [projectId]);

  async function getProjectDetails() {
    try {
      const { data } = await axios.get(
        `${url}api/projects/${projectId}`
      );
      setProjectDetails(data);
    } catch (error) {
      throw error
    }
  }
};
