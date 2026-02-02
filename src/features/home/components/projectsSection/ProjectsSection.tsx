import * as React from "react";
import { useFetch } from "~src/hooks";
import { Project } from "~src/types/projects";
import { ProjectCard } from "../projectCard";

export const ProjectsSection = () => {
  const { data: projects, loading, error } = useFetch<Project[]>("projects/limited");

  if (loading) {
    return (
      <section className="w-full px-20 py-20 bg-[#0F172A] flex flex-col gap-12">
        <div className="text-[#94A3B8] text-center">Loading projects...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full px-20 py-20 bg-[#0F172A] flex flex-col gap-12">
        <div className="text-[#EF4444] text-center">
          Failed to load projects. Please try again later.
        </div>
      </section>
    );
  }

  const projectCount = projects?.length || 0;

  return (
    <section className="w-full px-20 py-20 bg-[#0F172A] flex flex-col gap-12">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-white font-semibold text-sm tracking-[3px] font-mono">
          SELECTED PROJECTS
        </h2>
        <span className="text-[#22D3EE] font-medium text-sm font-mono">
          [{projectCount.toString().padStart(2, '0')}]
        </span>
      </div>
      <div className="flex gap-6 w-full">
        {projects?.map((project, index) => (
          <ProjectCard
            key={project._id || index}
            image={project.images[0] || ""}
            tag={project.applicationType?.toUpperCase() || "PROJECT"}
            title={project.title}
            description={project.description}
            techStack={project.techStack.join(" · ")}
          />
        ))}
      </div>
    </section>
  );
};
