import * as React from "react";
import { MainNavbar, Footer, ScrollToTop } from "~src/components";
import {
  ProjectActivitySection,
  ProjectDetailsHeader,
  ProjectDetailsSection,
  ProjectOverviewSection,
} from "../../components";
import { useParams } from "react-router-dom";
import { useGetProjectDetails } from "../../hooks/useGetProjectDetails";
import { useRecoilValue } from "recoil";
import { projectDetailsState } from "~src/stores";
import { formatDate } from "~src/utils";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  useGetProjectDetails(projectId!);
  const project = useRecoilValue(projectDetailsState);

  return (
    <>
      <ScrollToTop />
      <MainNavbar projects />
      <section
        id="project-details-header"
        className="pt-10 animate__animated animate__fadeInLeft"
      >
        <ProjectDetailsHeader
          title={project.title}
          date={formatDate(project.createdAt, "en-US")}
          status={project.status}
        />
      </section>
      <section id="project-details-section" className="pt-4">
        <ProjectDetailsSection project={project} />
      </section>
      <section
        id="project-overview-section"
        className="pt-4 pb-6 animate__animated animate__fadeInLeft"
      >
        <ProjectOverviewSection
          overview={project.description}
          githubURL={project.githubUrl}
          projectURL={project.projectUrl}
        />
      </section>
      <section
        id="project-activity-section"
        className="pt-4 pb-6 animate__animated animate__fadeInLeft"
      >
        <ProjectActivitySection developerFeedback={project.developerFeedback} />
      </section>
      <Footer />
    </>
  );
};
