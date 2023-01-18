import * as React from "react";
import { MainNavbar, Footer } from "~src/components";
import { ContactFormSection, IntroductionSection, ProjectLimitSection, ServiceLimitSection } from "../../components";

export const Home = () => {
  return (
    <>
      <MainNavbar home />
      <div id="Home" className="h-full bg-dark">
        <section id="intro-section" className="pt-10 pb-10">
          <IntroductionSection />
        </section>
        <section id="project-limit-section" className="pt-10 pb-10">
          <ProjectLimitSection />
        </section>
        <section id="service-limit-section" className="pt-10 pb-10">
          <ServiceLimitSection />
        </section>
        <section id="contact-form-section" className="pt-10 pb-10">
          <ContactFormSection />
        </section>
      </div>
      <Footer />
    </>
  );
};
