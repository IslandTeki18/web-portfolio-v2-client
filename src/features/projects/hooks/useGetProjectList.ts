import { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { projectListState } from "../api";

export const useGetProjectList = () => {
  const setProjectList = useSetRecoilState(projectListState);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}api/projects`
        );

        // Check if the response contains data
        if (response.data) {
          setProjectList(response.data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [setProjectList]);

};
