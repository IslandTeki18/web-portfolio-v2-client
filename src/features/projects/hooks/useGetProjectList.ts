import { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { projectListState } from "../api";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEVELOPMENT_URL
    : process.env.REACT_APP_SERVER_URL;

export const useGetProjectList = () => {
  const setProjectList = useSetRecoilState(projectListState);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${url}api/projects`);
        if (response.data) {
          setProjectList(response.data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);
};
