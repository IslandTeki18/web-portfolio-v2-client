import * as React from "react";
import { useState, useEffect } from "react";
import { MainNavbar, Footer, ScrollToTop } from "~src/components";
import {
  ProjectActivitySection,
  ProjectDetailsHeader,
  ProjectDetailsSection,
  ProjectOverviewSection,
} from "../../components";
import { Project } from "~src/types/projects";
import { useParams } from "react-router-dom";
import { useFetch, useTimeFormatter } from "~src/hooks";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const {
    data: project,
    loading,
    error,
  } = useFetch<Project>(`/projects/${projectId}`);

  return (
    <>
      <ScrollToTop />
      <MainNavbar projects />
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
      <section
        id="project-overview-section"
        className="pt-4 pb-6 animate__animated animate__fadeInLeft"
      >
        <ProjectOverviewSection
          overview={project?.description || "N / A"}
          githubURL={project?.githubUrl}
          projectURL={project?.projectUrl}
        />
      </section>
      <section
        id="project-activity-section"
        className="pt-4 pb-6 animate__animated animate__fadeInLeft"
      >
        <ProjectActivitySection
          developerFeedback={project?.developerFeedback}
        />
      </section>
      <Footer />
    </>
  );
};
