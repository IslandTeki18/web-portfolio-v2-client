import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { projectDetailsState } from "../api";
import axios from "axios";

export const useGetProjectDetails = (projectId: string) => {
  const setProjectDetails = useSetRecoilState(projectDetailsState);
  useEffect(() => {
    async function getProjectDetails() {
      try {
        const { data } = await axios.get(
          `${process.env.SERVER_URL}api/projects/${projectId}`
        );
        setProjectDetails(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProjectDetails();
  }, [projectId]);
};
