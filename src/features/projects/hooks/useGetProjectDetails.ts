import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { projectDetailsState } from "../api";
import axios from "axios";

export const useGetProjectDetails = (projectId: string) => {
  const setProjectDetails = useSetRecoilState(projectDetailsState);

  useEffect(() => {
    getProjectDetails();
  }, [projectId]);

  async function getProjectDetails() {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}api/projects/${projectId}`
      );
      setProjectDetails(data);
    } catch (error) {
      throw error
    }
  }
};
