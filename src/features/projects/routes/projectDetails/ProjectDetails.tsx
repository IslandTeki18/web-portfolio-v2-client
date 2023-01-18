import * as React from "react";
import { MainNavbar, Footer } from "~src/components";
import { ProjectActivitySection, ProjectDetailsHeader, ProjectDetailsSection, ProjectOverviewSection } from "../../components";

export const ProjectDetails = () => {
  // TODO: Bring in project object
  return (
    <>
      <MainNavbar projects />
      <section id="project-details-header" className="pt-10">
        <ProjectDetailsHeader
          title="Project Sample Title"
          date="12/29/2022"
          status="In Development"
        />
      </section>
      <section id="project-details-section" className="pt-4">
        <ProjectDetailsSection />
      </section>
      <section id="project-overview-section" className="pt-4 pb-6">
        <ProjectOverviewSection />
      </section>
      <section id="project-activity-section" className="pt-4 pb-6">
        <ProjectActivitySection />
      </section>
      <Footer />
    </>
  );
};
