import * as React from "react";
import { Footer, MainNavbar, ScrollToTop } from "~src/components";
import { ProjectListSection } from "../../components";
import { Helmet } from "react-helmet";

export const ProjectList = () => {
  return (
    <>
      <Helmet>
        <title>Landon McKell - Projects</title>
        <meta
          name="description"
          content="Explore a curated selection of Landon McKell's web development projects. From front-end interfaces to complex back-end systems, see how Landon turns ideas into functional, user-friendly applications."
        />
        <meta
          name="keywords"
          content="Landon McKell projects, web development portfolio, web design projects, software projects, front-end projects, back-end projects, full-stack projects, JavaScript projects, React projects, Next.js projects."
        />
      </Helmet>
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
