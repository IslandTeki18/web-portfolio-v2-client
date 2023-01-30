import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./main";
import { adminRoutes } from "./admin";

export function AppRoutes() {
  const admin = true;
  let routes = mainRoutes;
  if (admin) {
    routes = [...mainRoutes, ...adminRoutes];
  }
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
