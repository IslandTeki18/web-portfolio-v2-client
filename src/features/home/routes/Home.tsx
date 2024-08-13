import * as React from "react";
import { useRef } from "react";
import { MainNavbar, Footer } from "~src/components";
import {
  ContactFormSection,
  IntroductionSection,
  ProjectLimitSection,
} from "../components";
import { useOnScrollAnimation } from "~src/hooks";
import { Helmet } from "react-helmet";

export const Home = () => {
  const projectSectionRef = useRef<HTMLElement | null>(null);
  const contactSectionRef = useRef<HTMLElement | null>(null);
  useOnScrollAnimation({ ref: projectSectionRef });
  useOnScrollAnimation({ ref: contactSectionRef });

  return (
    <>
      <Helmet>
        <title>Landon McKell - Home</title>
        <meta
          name="description"
          content="Welcome to Landon McKell's portfolio. Explore innovative web development projects, detailed case studies, and expertise in front-end and back-end technologies. Discover how Landon can bring your digital ideas to life"
        />
        <meta
          name="keywords"
          content="Landon McKell, web developer portfolio, front-end developer, back-end developer, full-stack developer, web design, JavaScript, React, Next.js, TailwindCSS, software engineering"
        />
      </Helmet>
      <MainNavbar home />
      <div id="Home" className="h-full bg-dark">
        <section id="intro-section" className="my-10 md:my-20">
          <IntroductionSection />
        </section>
        <section
          ref={projectSectionRef}
          id="project-limit-section"
          className="mb-10 md:mb-16 animate__animated"
        >
          <ProjectLimitSection />
        </section>
        <section
          ref={contactSectionRef}
          id="contact-form-section"
          className="mb-10 md:mb-16 animate__animated"
        >
          <ContactFormSection />
        </section>
      </div>
      <Footer />
    </>
  );
};
