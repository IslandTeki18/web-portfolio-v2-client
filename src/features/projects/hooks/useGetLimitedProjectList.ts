import { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { projectLimitedState } from "../api";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEVELOPMENT_URL
    : process.env.REACT_APP_SERVER_URL;

export const useGetLimitedProjectList = () => {
  const setProjectLimitList = useSetRecoilState(projectLimitedState);
  useEffect(() => {
    async function getProjects() {
      try {
        const { data } = await axios.get(
          `${url}api/projects/limited`
        );
        return setProjectLimitList(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProjects();
  }, []);
};