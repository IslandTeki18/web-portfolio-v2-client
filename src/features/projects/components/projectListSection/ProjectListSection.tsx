import * as React from "react";
import { SectionWrapper } from "~src/components";
import { ProjectCard } from "../projectCard";
import { formatDate } from "~src/utils";


type ProjectListSectionProps = {
  projects: any[];
};

export const ProjectListSection = (props: ProjectListSectionProps) => {
  function renderProjects() {
    if (!props.projects) return;
    return props.projects.map((project) => (
      <ProjectCard
        key={project._id}
        id={project._id}
        title={project.title}
        projectDescription={project.description}
        projectType={project.type || project.applicationType}
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
