import { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { projectLimitedState } from "~src/stores";
import { API_URL } from "~src/config";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEVELOPMENT_URL
    : API_URL;

export const useGetLimitedProjectList = () => {
  const setProjectLimitList = useSetRecoilState(projectLimitedState);
  useEffect(() => {
    async function getProjects() {
      try {
        const { data } = await axios.get(`${url}api/projects/limited`);
        setProjectLimitList(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProjects();
  }, []);
};
