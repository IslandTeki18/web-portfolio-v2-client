import * as React from "react";
import { Footer, MainNavbar } from "~src/components";
import { ResumeSection } from "../../components/resumeSection";
import { EDUCATION, EXPERIENCES } from "../../utils/defaults";

export const Resume = () => {
  return (
    <>
      <MainNavbar />
      <section id="resume-section" className="py-8">
        <ResumeSection education={EDUCATION} experiences={EXPERIENCES} />
      </section>
      <Footer />
    </>
  );
};
