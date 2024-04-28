import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { projectDetailsState } from "~src/stores";
import axios from "axios";
import { API_URL } from "~src/config";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEVELOPMENT_URL
    : API_URL;

export const useGetProjectDetails = (projectId: string) => {
  const setProjectDetails = useSetRecoilState(projectDetailsState);

  useEffect(() => {
    getProjectDetails();
  }, [projectId]);

  async function getProjectDetails() {
    try {
      const { data } = await axios.get(`${url}api/projects/${projectId}`);
      setProjectDetails(data);
    } catch (error) {
      throw error;
    }
  }
};
