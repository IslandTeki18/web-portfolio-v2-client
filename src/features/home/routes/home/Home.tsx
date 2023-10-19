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
import { useAnimationOnScroll } from "~src/hooks";
import { projectLimitedState } from "~src/features/projects/api";
import { useGetLimitedProjectList } from "~src/features/projects/hooks";

export const Home = () => {
  const projectSectionRef = useRef<HTMLElement | null>(null);
  const serviceSectionRef = useRef<HTMLElement | null>(null);
  const contactSectionRef = useRef<HTMLElement | null>(null);
  useAnimationOnScroll({ ref: serviceSectionRef });
  useAnimationOnScroll({
    ref: projectSectionRef,
  });
  useAnimationOnScroll({ ref: contactSectionRef });
  useGetLimitedProjectList()
  const projectsLimited = useRecoilValue(projectLimitedState)

  return (
    <>
      <MainNavbar home />
      <div id="Home" className="h-full bg-dark">
        <section id="intro-section" className="my-20">
          <IntroductionSection />
        </section>
        <section
          ref={projectSectionRef}
          id="project-limit-section"
          className="py-16 animate__animated"
        >
          <ProjectLimitSection projects={projectsLimited} />
        </section>
        <section
          ref={serviceSectionRef}
          id="service-limit-section"
          className="py-16 animate__animated"
        >
          <ServiceLimitSection />
        </section>
        <section
          ref={contactSectionRef}
          id="contact-form-section"
          className="py-16 animate__animated"
        >
          <ContactFormSection />
        </section>
      </div>
      <Footer />
    </>
  );
};
