import * as React from "react";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { MainNavbar, Footer } from "~src/components";
import {
  ContactFormSection,
  IntroductionSection,
  ProjectLimitSection,
  ServiceLimitSection,
} from "../../components";
import { useOnScrollAnimation } from "~src/hooks";
import { projectLimitedState } from "~src/stores";
import { useGetLimitedProjectList } from "~src/features/projects/hooks";

export const Home = () => {
  const projectsLimited = useRecoilValue(projectLimitedState);
  const projectSectionRef = useRef<HTMLElement | null>(null);
  const serviceSectionRef = useRef<HTMLElement | null>(null);
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
          <ProjectLimitSection projects={projectsLimited} />
        </section>
        {/* <section
          ref={serviceSectionRef}
          id="service-limit-section"
          className="mb-10 md:mb-16 animate__animated"
        >
          <ServiceLimitSection />
        </section> */}
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
