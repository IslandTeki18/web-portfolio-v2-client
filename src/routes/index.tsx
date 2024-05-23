import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./main";
import { adminRoutes } from "./admin";
import { useGetLimitedProjectList, useGetProjectList } from "~src/features/projects/hooks";
import { storage } from "~src/utils";

export function AppRoutes() {
  const isAuthorized = storage.getUserInfo().role === "admin";

  useGetProjectList()
  useGetLimitedProjectList()

  const routes =
    isAuthorized ? [...mainRoutes, ...adminRoutes] : mainRoutes;

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
