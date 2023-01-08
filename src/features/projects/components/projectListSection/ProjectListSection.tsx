import * as React from "react";
import { SectionWrapper } from "~src/components";
import { ProjectCard } from "../projectCard";

export const ProjectListSection = () => {
  const mockProjects = [
    {
      title: "Sample One",
      id: "108rh48",
      date: "12/26/2022",
      projectType: "web",
      projectDescription:
        "Project description has a simple two line description of the project.",
    },
    {
      title: "Sample Two",
      id: "20dj4uh",
      date: "12/26/2022",
      projectType: "web",
      projectDescription:
        "Project description has a simple two line description of the project.",
    },
    {
      title: "Sample Three",
      id: "20d20j",
      date: "12/26/2022",
      projectType: "web",
      projectDescription:
        "Project description has a simple two line description of the project.",
    },
  ];
  function renderProjects() {
    return mockProjects.map((project) => (
      <ProjectCard
        id={project.id}
        title={project.title}
        projectDescription={project.projectDescription}
        projectType={project.projectType}
        date={project.date}
      />
    ));
  }

  return (
    <SectionWrapper title="My Projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-4">
        {renderProjects()}
      </div>
    </SectionWrapper>
  );
};
