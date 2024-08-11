import * as React from "react";
import { SectionWrapper } from "~src/components";
import { ProjectImageCard } from "~src/features/projects/components";
import { formatDate } from "~src/utils";
import { PROJECTS } from "~src/data";

// @ts-ignore
import noProjectImage from "~src/features/projects/assets/noImage2.png?as=webp";

export const ProjectLimitSection = () => {
  // function renderProjects() {
  //   if (!Array.isArray(projects)) return;
  //   return projects.map((project) => (
  //     <ProjectCard
  //       key={project._id}
  //       id={project._id}
  //       title={project.title}
  //       projectDescription={project.description}
  //       projectType={project.applicationType}
  //       date={formatDate(project.createdAt, "en-US")}
  //     />
  //   ));
  // }

  function renderProjects() {
    if (!Array.isArray(PROJECTS)) return;
    return PROJECTS.map((project) => (
      <ProjectImageCard
        key={project.id}
        id={project.id}
        title={project.title}
        projectDescription={project.description}
        projectType={project.applicationType}
        projectImage={project.images[0] || noProjectImage}
        createdAt={project.createdAt}
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
