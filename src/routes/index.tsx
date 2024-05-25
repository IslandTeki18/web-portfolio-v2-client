import * as React from "react";
import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./main";
import { adminRoutes } from "./admin";
import { storage } from "~src/utils";
import { getLimitedProjects, getProjects } from "~src/features/projects/api";
import { useSetRecoilState } from "recoil";
import { projectLimitedState, projectListState } from "~src/stores";

export function AppRoutes() {
  const setLimitedProjects = useSetRecoilState(projectLimitedState);
  const setProjects = useSetRecoilState(projectListState);

  const user = storage.getUserInfo()
  const routes =
    user ? [...mainRoutes, ...adminRoutes] : mainRoutes;

  const router = createBrowserRouter(routes);

  useEffect(() => {
    getLimitedProjects().then((response) => {
      setLimitedProjects(response.data);
    });

    getProjects().then((response) => {
      setProjects(response.data);
    });
  }, []);

  return <RouterProvider router={router} />;
}
