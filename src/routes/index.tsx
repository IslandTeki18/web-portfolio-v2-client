import * as React from "react";
import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { mainRoutes } from "./main";
import { adminRoutes } from "./admin";
import { userRoleState } from "~src/stores";

export function AppRoutes() {
  const isAdmin = useRecoilValue(userRoleState);

  const routes =
    isAdmin === "admin" ? [...mainRoutes, ...adminRoutes] : mainRoutes;

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
