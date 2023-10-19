import { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { projectListState } from "../api";

export const useGetProjectList = () => {
  const setProjectList = useSetRecoilState(projectListState);
  useEffect(() => {
    async function getProjects() {
      try {
        const { data } = await axios.get(
          `${process.env.SERVER_URL}api/projects`
        );
        return setProjectList(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProjects();
  }, []);
};
