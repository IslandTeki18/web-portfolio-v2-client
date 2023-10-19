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
  Contact,
  Resume,
  Login
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
    path: "/contact",
    element: <Contact />
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
    element: <Resume />
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
    path: "/admin",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
