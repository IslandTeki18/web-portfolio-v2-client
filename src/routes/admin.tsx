import * as React from "react";

import { Dashboard, AdminProjectDetails, AdminProjectList } from "~/src/features/admin";

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
    index: true,
  },
  {
    path: "/admin/project/:id",
    element: <AdminProjectDetails />,
  },
  {
    path: "/admin/projects-list",
    element: <AdminProjectList />,
  },
];
