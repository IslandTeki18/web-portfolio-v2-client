import * as React from "react";
import { Footer, MainNavbar, ScrollToTop } from "~src/components";
import { BlogListSection } from "../components";

export const BlogList = () => {
  return (
    <>
      <ScrollToTop />
      <MainNavbar blogs />
      <section
        id="blog-list-section"
        className="my-20 animate__animated animate__fadeInLeft"
      >
        <BlogListSection />
      </section>
      <Footer />
    </>
  );
};
