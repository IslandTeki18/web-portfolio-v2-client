import * as React from "react";
import { useRecoilValue } from "recoil";
import { Footer, MainNavbar, ScrollToTop } from "~src/components";
import { ProjectListSection } from "../../components";
import { projectListState } from "~src/stores";

export const ProjectList = () => {
  const projectList = useRecoilValue(projectListState)
  return (
    <>
      <ScrollToTop />
      <MainNavbar projects />
      <section
        id="project-list-section"
        className="my-10 md:my-20 animate__animated animate__fadeIn"
      >
        <ProjectListSection projects={projectList} />
      </section>
      <Footer />
    </>
  );
};
