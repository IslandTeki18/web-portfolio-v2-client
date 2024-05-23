import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { mainRoutes } from "./main";
import { adminRoutes } from "./admin";
import { userState } from "~src/stores";
import { useGetLimitedProjectList, useGetProjectList } from "~src/features/projects/hooks";

export function AppRoutes() {
  const user = useRecoilValue(userState);
  useGetProjectList()
  useGetLimitedProjectList()

  const routes =
    user.role === "admin" ? [...mainRoutes, ...adminRoutes] : mainRoutes;

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
