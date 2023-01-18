import * as React from "react";
import { Footer, MainNavbar } from "~src/components";
import { AboutMeSection } from "../../components";
import { BlogListSection } from "~src/features";

export const About = () => {
  return (
    <>
      <MainNavbar about />
      <section id="about-me-section" className="pt-10 pb-8">
        <AboutMeSection />
      </section>
      <section id="blog-list-section" className="mb-8">
        <BlogListSection />
      </section>
      <Footer />
    </>
  );
};
