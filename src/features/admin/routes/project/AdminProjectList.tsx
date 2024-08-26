import * as React from "react";
import Navbar from "../../components/Navbar";
import { ProjectsTable } from "../../components";
import { useFetch } from "~src/hooks";

export const AdminProjectList = () => {
  const { data: projects, loading, error } = useFetch("/projects");
  // TODO: Fetch projects from the server
  // TODO: Handle loading and error states

  return (
    <div className="h-screen w-full bg-gray-1000">
      <Navbar />
      {loading ? (
        <div className="mx-auto max-w-6xl">
          <p className="text-white">Loading...</p>
        </div>
      ) : error ? (
        <div className="mx-auto max-w-6xl">
          <p className="text-white">Error: {error.message}</p>
        </div>
      ) : (
        <div className="mx-auto max-w-6xl">
          <ProjectsTable projects={projects} />
        </div>
      )}
    </div>
  );
};
