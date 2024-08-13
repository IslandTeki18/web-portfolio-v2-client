import * as React from "react";
import { MainNavbar, Footer } from "~src/components";
import { ContactFormSection } from "~src/features/home/components";
import { Helmet } from "react-helmet";

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Landon McKell - Contact</title>
        <meta
          name="description"
          content="Get in touch with Landon McKell. Whether you have a project in mind or want to collaborate, reach out through the contact form or connect via LinkedIn and GitHub."
        />
        <meta
          name="keywords"
          content="Contact Landon McKell, get in touch, web developer contact, connect with Landon McKell, LinkedIn, GitHub, collaboration."
        />
      </Helmet>
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
