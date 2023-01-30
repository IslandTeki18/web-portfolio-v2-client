import * as React from "react";
import { useRef, useState } from "react";
import { MainNavbar, Footer, Modal } from "~src/components";
import {
  ContactFormSection,
  IntroductionSection,
  ProjectLimitSection,
  ServiceLimitSection,
} from "../../components";
import { useAnimationOnScroll } from "~src/hooks";

export const Home = () => {
  const projectSectionRef = useRef<HTMLElement | null>(null);
  const serviceSectionRef = useRef<HTMLElement | null>(null);
  const contactSectionRef = useRef<HTMLElement | null>(null);
  useAnimationOnScroll({ ref: serviceSectionRef });
  useAnimationOnScroll({
    ref: projectSectionRef,
  });
  useAnimationOnScroll({ ref: contactSectionRef });

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
          <ProjectLimitSection />
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
