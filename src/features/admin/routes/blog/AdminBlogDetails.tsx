import * as React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import { BlogPost } from "~src/types/blogs";
import { PageWrapper } from "../../components";
import { Button } from "~src/components";
import { Link, useNavigate } from "react-router-dom";

export const AdminBlogDetails = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({} as BlogPost);

  return (
    <div className="h-screen w-full bg-gray-1000">
      <Navbar />
      <PageWrapper className="flex flex-col gap-4 max-w-3xl mx-auto">
        <div className="flex items-center gap-4">
          <Button
            label="Go Back"
            className="md:w-1/4 w-1/2"
            onClick={() => navigate("/admin/blogs")}
          />
        </div>
        <h2 className="text-4xl text-gray-100">
          Blog Post - {blog.title || "No Title"}
        </h2>
        <hr />
        <h3 className="text-xl font-medium text-gray-100">
          General Information
        </h3>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Content: </p>
          <p className="text-gray-100">
            {blog.content
              ? blog.content.map((post) => {
                  switch (post.type) {
                    case "paragraph":
                      return <p>{post.content}</p>;
                    case "image":
                      return <img src={post.src} alt={post.alt} />;
                    case "header":
                      switch (post.level) {
                        case 1:
                          return (
                            <h1 className="text-2xl font-semibold tracking-wide">
                              {post.content}
                            </h1>
                          );
                        case 2:
                          return (
                            <h2 className="text-1xl font-semibold tracking-wide">
                              {post.content}
                            </h2>
                          );
                        case 3:
                          return (
                            <h3 className="text-lg font-semibold">
                              {post.content}
                            </h3>
                          );
                        case 4:
                          return (
                            <h4 className="text-md font-medium">
                              {post.content}
                            </h4>
                          );
                        case 5:
                          return (
                            <h5 className="text-base font-medium">
                              {post.content}
                            </h5>
                          );
                        default:
                          return <p>{post.content}</p>;
                      }
                    default:
                      return <p>{post.content}</p>;
                  }
                })
              : "No Content"}
          </p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Date Published: </p>
          <p className="text-gray-100">
            {blog.datePublished
              ? new Intl.DateTimeFormat("US-EN", {
                  dateStyle: "full",
                }).format(blog.datePublished)
              : "N / A"}
          </p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Is Public: </p>
          <p className="text-gray-100">{blog.isPublic || "N / A"}</p>
        </div>
        <hr className="mb-4" />
        <div className="flex flex-col md:flex-row gap-4">
          <Button
            variant="danger"
            labelColor="light"
            label="Delete Blog"
            className="w-full md:w-1/3"
          />
          <Button
            variant="secondary"
            labelColor="light"
            label="Edit Blog"
            className="w-full md:w-1/3"
          />
          <Button
            variant="dark"
            label="View Blog"
            className="w-full md:w-1/3"
          />
        </div>
      </PageWrapper>
    </div>
  );
};
