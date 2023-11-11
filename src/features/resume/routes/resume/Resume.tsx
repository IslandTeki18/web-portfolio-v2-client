import * as React from "react";
import { Footer, MainNavbar } from "~src/components";
import { ResumeSection } from "../../components/resumeSection";
import { EDUCATION, EXPERIENCES } from "../../utils/defaults";

export const Resume = () => {
  return (
    <>
      <MainNavbar resume />
      <section id="resume-section" className="my-10 md:my-20 animate__animated animate__fadeIn">
        <ResumeSection education={EDUCATION} experiences={EXPERIENCES} />
      </section>
      <Footer />
    </>
  );
};
