import * as React from "react";
import { MainNavbar, Footer, ScrollToTop } from "~src/components";
import { BlogDetailsSection } from "../components";

export const BlogDetails = () => {
  return (
    <>
      <ScrollToTop />
      <MainNavbar blogs />
      <section
        id="blod-details-section"
        className="my-20 animate__animated animate__fadeInLeft"
      >
        <BlogDetailsSection />
      </section>
      <Footer />
    </>
  );
};
