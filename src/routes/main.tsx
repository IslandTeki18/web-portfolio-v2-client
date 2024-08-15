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
import {
  Login,
  AdminProjectList,
  AdminProjectDetails,
  AdminBlogList,
  AdminBlogDetails,
} from "~src/features/admin";
import { ProtectedRoute } from "./ProtectedRoute";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin/projects",
    element: <ProtectedRoute element={<AdminProjectList />} />,
  },
  {
    path: "/admin/projects/:projectId",
    element: <ProtectedRoute element={<AdminProjectDetails />} />,
  },
  {
    path: "/admin/blogs",
    element: <ProtectedRoute element={<AdminBlogList />} />,
  },
  {
    path: "/admin/blogs/:blogId",
    element: <ProtectedRoute element={<AdminBlogDetails />} />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
