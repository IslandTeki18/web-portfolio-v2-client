import * as React from "react";
import { ScrollToTop, WheelSpinner } from "~src/components";
import { PortfolioHeader, PortfolioFooter } from "~src/features/home/components";
import {
  ProjectDetailsHeader,
  ProjectDetailsSection,
  ProjectOverviewSection,
  ProjectMetadataSection,
  TechStackSection,
  ProjectActivitySection,
} from "../../components";
import { Project } from "~src/types/projects";
import { useParams } from "react-router-dom";
import { useFetch } from "~src/hooks";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const {
    data: project,
    loading,
    error,
  } = useFetch<Project>(`projects/${projectId}`);

  if (loading) {
    return (
      <div className="h-screen w-full bg-base-100">
        <PortfolioHeader />
        <div className="flex justify-center pt-8">
          <WheelSpinner size="lg" color="blue" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full bg-base-100">
        <PortfolioHeader />
        <div className="flex justify-center pt-8">
          <p className="text-white">Error: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <PortfolioHeader />
      <section
        id="project-details-header"
        className="pt-10 animate__animated animate__fadeInLeft"
      >
        <ProjectDetailsHeader
          title={project?.title || "No Title"}
          date={project?.createdAt as Date}
          status={project?.status || ""}
        />
      </section>
      <section id="project-details-section" className="pt-4">
        <ProjectDetailsSection
          isPublic={project?.projectType || "N / A"}
          client={project?.client || ""}
          budget={project?.budget || "0"}
          designer={project?.designer || ""}
          createdAt={project?.createdAt as Date}
          updatedAt={project?.updatedAt as Date}
          images={project?.images || []}
        />
      </section>
      <section id="project-metadata-section" className="pt-4">
        <ProjectMetadataSection
          projectType={project?.projectType || "N/A"}
          applicationType={project?.applicationType || "N/A"}
          status={project?.status || ""}
          designer={project?.designer}
          budget={project?.budget}
          client={project?.client}
          createdAt={project?.createdAt as Date}
          updatedAt={project?.updatedAt as Date}
        />
      </section>
      <section id="tech-stack-section" className="pt-4">
        <TechStackSection
          techStack={project?.techStack || []}
          tags={project?.tags || []}
        />
      </section>
      <section
        id="project-overview-section"
        className="pt-4 animate__animated animate__fadeInLeft"
      >
        <ProjectOverviewSection
          overview={project?.description || "N / A"}
          githubURL={project?.githubUrl}
          projectURL={project?.projectUrl}
          trelloURL={project?.trelloUrl}
        />
      </section>
      <section id="project-activity-section" className="pt-4 pb-6">
        <ProjectActivitySection
          developerFeedback={project?.developerFeedback}
          relatedProjects={project?.relatedProjects}
        />
      </section>
      <PortfolioFooter />
    </>
  );
};
