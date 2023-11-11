import * as React from "react";
import { useRecoilValue } from "recoil";
import { Footer, MainNavbar, ScrollToTop } from "~src/components";
import { ProjectListSection } from "../../components";
import { useGetProjectList } from "../../hooks";
import { projectListState } from "../../api";

export const ProjectList = () => {
  useGetProjectList();
  const projectList = useRecoilValue(projectListState)
  return (
    <>
      <ScrollToTop />
      <MainNavbar projects />
      <section
        id="project-list-section"
        className="my-20 animate__animated animate__fadeInLeft"
      >
        <ProjectListSection projects={projectList} />
      </section>
      <Footer />
    </>
  );
};
