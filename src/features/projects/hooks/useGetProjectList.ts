import { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { projectListState } from "~src/stores/project";
import { API_URL } from "~src/config";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEVELOPMENT_URL
    : API_URL;

export const useGetProjectList = () => {
  const setProjectList = useSetRecoilState(projectListState);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${url}api/projects`);
        setProjectList(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);
};
