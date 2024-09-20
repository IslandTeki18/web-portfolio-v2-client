import * as React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import { BlogsTable } from "../../components/BlogsTable";

export const AdminBlogList = () => {
  const [blogs, setBlogs] = useState([]);

  // TODO: Fetch blogs from the server
  // TODO: Implement the fetchBlogs function

  return (
    <div className="h-screen w-full bg-gray-1000">
      <Navbar />
      <BlogsTable blogPosts={blogs} />
    </div>
  );
};
