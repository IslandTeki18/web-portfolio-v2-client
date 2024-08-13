import * as React from "react";
import { useRef } from "react";
import { MainNavbar, Footer } from "~src/components";
import {
  ContactFormSection,
  IntroductionSection,
  ProjectLimitSection,
} from "../components";
import { useOnScrollAnimation } from "~src/hooks";

export const Home = () => {
  const projectSectionRef = useRef<HTMLElement | null>(null);
  const contactSectionRef = useRef<HTMLElement | null>(null);
  useOnScrollAnimation({ ref: projectSectionRef });
  useOnScrollAnimation({ ref: contactSectionRef });

  return (
    <>
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
