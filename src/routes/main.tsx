import * as React from "react";
import { Home, NotFound } from "~/src/features";
import { ProjectDetails, ProjectList } from "~src/features/projects/routes";

export const mainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <ProjectList />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
