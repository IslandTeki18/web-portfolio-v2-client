import * as React from "react";
import { MainNavbar, Footer } from "~src/components";
import { BlogDetailsSection } from "../../components";

export const BlogDetails = () => {
  return (
    <>
      <MainNavbar blogs />
      <section id="blod-details-section" className="my-20 animate__animated animate__fadeInLeft">
        <BlogDetailsSection />
      </section>
      <Footer />
    </>
  );
};
