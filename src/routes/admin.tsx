import * as React from "react";

import {
  Dashboard,
  AdminProjectDetails,
  AdminProjectList,
  AdminRoot,
} from "~/src/features/admin";
import { AdminProjectRoot } from "~src/features";

export const adminRoutes = [
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "projects-list",
        element: <AdminProjectList />,
      },
      {
        path: "project",
        element: <AdminProjectRoot />,
        children: [
          {
            path: ":id",
            element: <AdminProjectDetails />,
          },
        ]
      },
      
    ],
  },
];
