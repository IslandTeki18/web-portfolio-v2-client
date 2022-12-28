import * as React from "react";
import { MainNavbar, Footer } from "~src/components";
import { ProjectDetailsHeader, ProjectDetailsSection } from "../../components";

export const ProjectDetails = () => {
  return (
    <>
      <MainNavbar />
      <section id="project-details-header" className="pt-10">
        <ProjectDetailsHeader
          title="Project Sample Title"
          date="12/29/2022"
          status="In Development"
        />
      </section>
      <section id="project-details-section" className="pt-4 pb-6">
        <ProjectDetailsSection />
      </section>
      <Footer />
    </>
  );
};
