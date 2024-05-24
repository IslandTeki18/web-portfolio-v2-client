import * as React from "react";
import { useRecoilValue } from "recoil";
import { Footer, MainNavbar, ScrollToTop } from "~src/components";
import { ProjectListSection } from "../../components";
import { projectListState } from "~src/stores";

export const ProjectList = () => {
  return (
    <>
      <ScrollToTop />
      <MainNavbar projects />
      <section
        id="project-list-section"
        className="my-10 md:my-20 animate__animated animate__fadeIn"
      >
        <ProjectListSection />
      </section>
      <Footer />
    </>
  );
};
