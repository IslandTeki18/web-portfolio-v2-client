import { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { projectLimitedState } from "../api";

export const useGetLimitedProjectList = () => {
  const setProjectLimitList = useSetRecoilState(projectLimitedState);
  useEffect(() => {
    async function getProjects() {
      try {
        const { data } = await axios.get(
          `${process.env.SERVER_URL}api/projects/limited`
        );
        return setProjectLimitList(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProjects();
  }, []);
};