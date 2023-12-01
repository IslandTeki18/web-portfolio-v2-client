import * as React from "react";

import { Dashboard, ProjectDetails, ProjectList } from "~/src/features";

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin/project/:id",
    element: <ProjectDetails />
  },
  {
    path: "/admin/projects-list",
    element: <ProjectList />
  }
];
