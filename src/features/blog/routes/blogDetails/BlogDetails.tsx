import * as React from "react";
import { MainNavbar, Footer } from "~src/components";
import { BlogDetailsSection } from "../../components";

export const BlogDetails = () => {
  return (
    <>
      <MainNavbar blogs />
      <section id="blod-details-section" className="py-8">
        <BlogDetailsSection />
      </section>
      <Footer />
    </>
  );
};
