import * as React from "react";
import { Dashboard } from "~src/features";
import { AdminProjectDetails } from "~src/features";

export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "admin/project/:id",
    element: <AdminProjectDetails />,
  },
];
