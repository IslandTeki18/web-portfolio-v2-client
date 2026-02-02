import * as React from "react";
import {
  Home,
  NotFound,
  Resume,
  ProjectList,
  ProjectDetails,
} from "~/src/features";

export const mainRoutes = [
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/projects",
    element: <ProjectList />,
  },
  {
    path: "/project/:projectId",
    element: <ProjectDetails />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
