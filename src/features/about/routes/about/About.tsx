import * as React from "react";
import { Footer, MainNavbar } from "~src/components";
import { AboutMeSection } from "../../components";
import { BlogListSection } from "~src/features";

export const About = () => {
  return (
    <>
      <MainNavbar />
      <section id="about-me-section" className="py-8">
        <AboutMeSection />
      </section>
      <section id="blog-list-section" className="mb-8">
        <BlogListSection />
      </section>
      <Footer />
    </>
  );
};
