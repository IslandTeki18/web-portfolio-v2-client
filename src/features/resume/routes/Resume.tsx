import * as React from "react";
import { PortfolioHeader, PortfolioFooter } from "~src/features/home/components";
import { ResumeHeader } from "../components/resumeHeader";
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
      <PortfolioHeader />
      <main className="bg-[#0A0F1C] min-h-screen animate__animated animate__fadeIn">
        <ResumeHeader />
        <ResumeSection education={EDUCATION} experiences={EXPERIENCES} />
      </main>
      <PortfolioFooter />
    </>
  );
};
