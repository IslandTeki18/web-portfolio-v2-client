import * as React from "react";
import { useRef } from "react";
import { Footer, MainNavbar, ScrollToTop } from "~src/components";
import { ProjectListSection } from "../../components";

export const ProjectList = () => {
  return (
    <>
    <ScrollToTop />
      <MainNavbar projects />
      <section
        id="project-list-section"
        className="my-20 animate__animated animate__fadeInLeft"
      >
        <ProjectListSection />
      </section>
      <Footer />
    </>
  );
};
