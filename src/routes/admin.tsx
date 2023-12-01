import * as React from "react";

import { Dashboard, ProjectDetails, ProjectList } from "~/src/features/admin";

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
    index: true,
  },
  {
    path: "/admin/project/:id",
    element: <ProjectDetails />,
  },
  {
    path: "/admin/projects-list",
    element: <ProjectList />,
  },
];
