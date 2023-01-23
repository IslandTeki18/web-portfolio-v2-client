import * as React from "react";
import { Footer, MainNavbar } from "~src/components";
import { BlogListSection } from "../../components";

export const BlogList = () => {
  return (
    <>
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
