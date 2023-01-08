import * as React from "react";
import {
  Home,
  NotFound,
  ServiceDetails,
  ServiceList,
  ProjectDetails,
  ProjectList,
  BlogDetails,
  BlogList,
  About,
} from "~/src/features";

export const mainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
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
