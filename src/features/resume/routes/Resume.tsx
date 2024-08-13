import * as React from "react";
import { Footer, MainNavbar } from "~src/components";
import { ResumeSection } from "../components/resumeSection";
import { EDUCATION, EXPERIENCES } from "../utils/defaults";
import { Helmet } from "react-helmet";

export const Resume = () => {
  return (
    <>
      <Helmet>
        <title>Landon McKell - Resume</title>
        <meta
          name="description"
          content="Review Landon McKell's resume, showcasing his experience in web development, programming languages, tools, and professional achievements. Download the resume to learn more about his expertise."
        />
        <meta
          name="keywords"
          content="Landon McKell resume, web developer resume, software engineer resume, download resume, web development experience, programming skills, professional achievements."
        />
      </Helmet>
      <MainNavbar resume />
      <section
        id="resume-section"
        className="my-10 md:my-20 animate__animated animate__fadeIn"
      >
        <ResumeSection education={EDUCATION} experiences={EXPERIENCES} />
      </section>
      <Footer />
    </>
  );
};
