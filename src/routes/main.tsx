import * as React from "react";
import {
  Home,
  NotFound,
  ServiceDetails,
  ServiceList,
  BlogDetails,
  BlogList,
  About,
  Contact,
  Resume,
  Login,
} from "~/src/features";
import { ProjectList, ProjectDetails } from "~src/features/projects";

export const mainRoutes = [
  {
    path: "/",
    element: <Home />,
    index: true
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
    path: "/services",
    element: <ServiceList />,
  },
  {
    path: "/service/:id",
    element: <ServiceDetails />,
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
