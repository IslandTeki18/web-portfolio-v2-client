import * as React from "react";
import Navbar from "../../components/Navbar";
import { ProjectsTable } from "../../components";
import { useFetch } from "~src/hooks";
import { WheelSpinner } from "~src/components";
import { Project } from "~src/types/projects";

export const AdminProjectList = () => {
  const { data: projects, loading, error } = useFetch<Project[]>("/projects");

  if (loading) {
    return (
      <div className="h-screen w-full bg-gray-1000">
        <Navbar />
        <div className="flex justify-center pt-8">
          <WheelSpinner size="lg" color="red" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full bg-gray-1000">
        <Navbar />
        <div className="flex justify-center pt-8">
          <p className="text-white">Error: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-gray-1000">
      <Navbar />

      <div className="mx-auto max-w-6xl">
        <ProjectsTable projects={projects!} />
      </div>
    </div>
  );
};
