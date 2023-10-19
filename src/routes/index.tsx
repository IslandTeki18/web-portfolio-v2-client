import * as React from "react";
import { useRecoilValue } from "recoil";
import { userRoleState } from "~src/stores";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./main";
import { adminRoutes } from "./admin";

export function AppRoutes() {
  const userRole = useRecoilValue(userRoleState)
  const isAdmin = userRole === "admin"
  let routes = mainRoutes;
  if (isAdmin) {
    routes = [...mainRoutes, ...adminRoutes];
  }
  const router = createBrowserRouter(routes);
  return (
      <RouterProvider router={router} />
  );
}
