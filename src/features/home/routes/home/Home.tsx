import * as React from "react";
import { MainNavbar } from "~src/components";
import { IntroductionSection, ProjectLimitSection, ServiceLimitSection } from "../../components";

export const Home = () => {
  return (
    <>
      <MainNavbar />
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
      </div>
    </>
  );
};
