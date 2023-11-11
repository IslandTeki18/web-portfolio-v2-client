import * as React from "react";
import { MainNavbar, Footer } from "~src/components";
import { ContactFormSection } from "~src/features/home/components";

export const Contact = () => {
  return (
    <>
      <MainNavbar contact />
      <section
        id="contact-form-section"
        className="my-10 md:my-20 animate__animated animate__fadeIn"
      >
        <ContactFormSection />
      </section>
      <Footer />
    </>
  );
};
