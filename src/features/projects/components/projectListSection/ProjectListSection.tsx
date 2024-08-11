import * as React from "react";
import { PROJECTS } from "~src/data";
import { SectionWrapper } from "~src/components";
import { ProjectCard } from "../projectCard";
import { formatDate } from "~src/utils";

export const ProjectListSection = () => {
  
  function renderProjects() {
    if (!Array.isArray(PROJECTS)) return;
    return PROJECTS.map((project) => (
      <ProjectCard
        key={project.id}
        id={project.id}
        title={project.title}
        projectDescription={project.description}
        projectType={project.applicationType}
        date={formatDate(project.createdAt, "en-US")}
      />
    ));
  }

  return (
    <SectionWrapper title="My Projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
        {renderProjects()}
      </div>
    </SectionWrapper>
  );
};
