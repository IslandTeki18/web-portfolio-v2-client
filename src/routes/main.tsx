import * as React from "react";
import {
  Home,
  NotFound,
  BlogDetails,
  BlogList,
  About,
  Contact,
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
    path: "/contact",
    element: <Contact />,
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
