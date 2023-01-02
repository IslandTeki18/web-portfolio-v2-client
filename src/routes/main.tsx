import * as React from "react";
import { Home, NotFound } from "~/src/features";
import { BlogDetails, BlogList } from "~src/features/blog";
import { ProjectDetails, ProjectList } from "~src/features/projects/routes";
import { ServiceDetails, ServiceList } from "~src/features/services";

export const mainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blogs",
    element: <BlogList />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetails />,
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
    path: "/services",
    element: <ServiceList />,
  },
  {
    path: "/service/j:id",
    element: <ServiceDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
