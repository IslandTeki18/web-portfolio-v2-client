import { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { projectLimitedState } from "~src/stores";

const url =
  process.env.REACT_APP_NODE_ENV === "development"
    ? process.env.REACT_APP_DEVELOPMENT_URL
    : process.env.REACT_APP_SERVER_URL;

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
