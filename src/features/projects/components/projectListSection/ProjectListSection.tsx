import * as React from "react";
import { SectionWrapper } from "~src/components";
import { ProjectCard } from "../projectCard";
import { formatDate } from "~src/utils";
import { Project } from "../../types";
import { useRecoilValue } from "recoil";
import { projectListState } from "~src/stores";


export const ProjectListSection = () => {
  const projects: Project[] = useRecoilValue(projectListState);

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
    <SectionWrapper title="My Projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
        {renderProjects()}
      </div>
    </SectionWrapper>
  );
};
