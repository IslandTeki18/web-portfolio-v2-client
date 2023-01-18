import * as React from "react";
import { Footer, MainNavbar } from "~src/components";
import { ProjectListSection } from "../../components";
import { ContactFormSection } from "~src/features/home/components";

export const ProjectList = () => {
  return (
    <>
      <MainNavbar projects />
      <section id="project-list-section" className="pt-10 pb-8">
        <ProjectListSection />
      </section>
      <Footer />
    </>
  );
};
