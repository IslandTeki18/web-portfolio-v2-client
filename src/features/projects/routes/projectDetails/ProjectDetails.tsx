import * as React from "react";
import { useEffect } from "react";
import { MainNavbar, Footer, ScrollToTop } from "~src/components";
import {
  ProjectActivitySection,
  ProjectDetailsHeader,
  ProjectDetailsSection,
  ProjectOverviewSection,
} from "../../components";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { projectDetailsState } from "~src/stores";
import { formatDate } from "~src/utils";
import { getProjectById } from "../../api";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useRecoilState(projectDetailsState);
  useEffect(() => {
    if (projectId) {
      getProjectById(projectId).then((response) => {
        setProject(response.data);
      });
    }
  }, [projectId])

  console.log(project)

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
        <ProjectDetailsSection />
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
