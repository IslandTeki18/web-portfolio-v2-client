import * as React from "react";
import {
  PortfolioHeader,
  HeroSection,
  ProjectsSection,
  ResumeSection,
  ContactSection,
  PortfolioFooter,
} from "../components";
import { Helmet } from "react-helmet";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>John Doe - Creative Developer</title>
        <meta
          name="description"
          content="Creative developer crafting digital experiences that blend form and function. Explore projects, resume, and get in touch."
        />
        <meta
          name="keywords"
          content="web developer, creative developer, full-stack developer, React, TypeScript, portfolio"
        />
      </Helmet>
      <div className="min-h-screen bg-[#0A0F1C] font-sans">
        <PortfolioHeader />
        <HeroSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
        <PortfolioFooter />
      </div>
    </>
  );
};
