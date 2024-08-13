import * as React from "react";
import Navbar from "../../components/Navbar";
import { ProjectsTable } from "../../components";
import { useState } from "react";

export const AdminProjectList = () => {
  const [projects, setProjects] = useState([]);
  return (
    <div className="h-screen w-full bg-gray-1000">
      <Navbar />
      <ProjectsTable projects={projects} />
    </div>
  );
};
