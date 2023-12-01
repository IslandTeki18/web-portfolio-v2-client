import * as React from "react";
import { SectionWrapper } from "~src/components";
import { ProjectCard } from "~src/features/projects/components";
import { useTimeFormatter } from "~src/hooks";

type Props = {
  projects?: any[];
};

export const ProjectLimitSection = (props: Props) => {
  
  function renderProjects() {
    if (!props.projects) return;
    return props.projects.map((project) => (
      <ProjectCard
        key={project._id}
        id={project._id}
        title={project.title}
        projectDescription={project.description}
        projectType={project.type || project.applicationType}
        date={useTimeFormatter(project.createdAt, "en-US")}
      />
    ));
  }

  return (
    <SectionWrapper
      title="My Recent Projects"
      isLimitedSection
      viewAllLink="/projects"
      className="projectLimited"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
        {renderProjects()}
      </div>
    </SectionWrapper>
  );
};
