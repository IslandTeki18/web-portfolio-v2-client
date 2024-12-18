import * as React from "react";
import { SectionWrapper } from "~src/components";
import { ProjectImageCard } from "~src/features/projects/components";
import { useFetch } from "~src/hooks";

// @ts-ignore
import noProjectImage from "~src/features/projects/assets/noImage2.png?as=webp";

export const ProjectLimitSection = () => {
  const { data: projects, loading, error } = useFetch("projects/limited");

  function renderProjects() {
    if (loading) return <p className="text-white">Loading...</p>;
    if (error) return <p className="text-white">Error: {error.message}</p>;
    if (!Array.isArray(projects)) return;

    return projects.map((project) => (
      <ProjectImageCard
        key={project._id}
        id={project._id}
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
