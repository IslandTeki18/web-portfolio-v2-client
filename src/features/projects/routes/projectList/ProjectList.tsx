import * as React from "react";
import { useRef } from "react";
import { Footer, MainNavbar } from "~src/components";
import { ProjectListSection } from "../../components";
import { useAnimationOnScroll } from "~src/hooks";

export const ProjectList = () => {
  return (
    <>
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
