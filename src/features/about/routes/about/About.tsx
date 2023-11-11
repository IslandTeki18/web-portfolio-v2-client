import * as React from "react";
import { useRef } from "react";
import { Footer, MainNavbar } from "~src/components";
import { AboutMeSection } from "../../components";
import { BlogListSection } from "~src/features";
import { useOnScrollAnimation } from "~src/hooks";

export const About = () => {
  const blogSectionRef = useRef<HTMLElement | null>(null);
  useOnScrollAnimation({ ref: blogSectionRef });
  return (
    <>
      <MainNavbar about />
      <section id="about-me-section" className="my-10 md:my-20 animate__animated animate__fadeIn">
        <AboutMeSection />
      </section>
      {/* <section
        ref={blogSectionRef}
        id="blog-list-section"
        className="my-20 animate__animated"
      >
        <BlogListSection />
      </section> */}
      <Footer />
    </>
  );
};
