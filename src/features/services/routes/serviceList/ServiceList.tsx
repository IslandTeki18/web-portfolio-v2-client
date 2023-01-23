import * as React from "react";
import { Footer, MainNavbar } from "~src/components";
import { ServiceListSection } from "../../components";

export const ServiceList = () => {
  return (
    <>
      <MainNavbar services />
      <section
        id="service-list-section"
        className="my-20 animate__animated animate__fadeInLeft"
      >
        <ServiceListSection />
      </section>
      <Footer />
    </>
  );
};
