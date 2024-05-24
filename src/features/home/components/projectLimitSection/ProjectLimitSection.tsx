import * as React from "react";
import { SectionWrapper } from "~src/components";
import { ProjectCard } from "~src/features/projects/components";
import { formatDate } from "~src/utils";
import { useRecoilValue } from "recoil";
import { projectLimitedState } from "~src/stores";
import { Project } from "~src/features/projects/types";

export const ProjectLimitSection = () => {
  const projects: Project[] = useRecoilValue(projectLimitedState);

  function renderProjects() {
    if (!Array.isArray(projects)) return;
    return projects.map((project) => (
      <ProjectCard
        key={project._id}
        id={project._id}
        title={project.title}
        projectDescription={project.description}
        projectType={project.applicationType}
        date={formatDate(project.createdAt, "en-US")}
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
