import * as React from "react";
import { SectionWrapper } from "~src/components";

type Props = {
  services?: any[];
};

export const ServiceLimitSection = (props: Props) => {
  function renderServiceCards() {
    if (!props.services) return;
    return props.services.map((service, idx) => (
      <div
        className="border border-white p-6 text-white min-w-[16rem] w-full h-52 flex flex-col justify-between"
        key={idx}
      >
        <div className="flex justify-between align-baseline">
          <span className="uppercase font-bold">{service.title}</span>
          <i className="fa-solid fa-code text-2xl"></i>
        </div>
        <span>{service.serviceDescription}</span>
      </div>
    ));
  }

  return (
    <SectionWrapper title="My services" isLimitedSection viewAllLink="services">
      <div className="flex mt-4 gap-4">
        <div className="md:w-9/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {renderServiceCards()}
          </div>
        </div>
        <div className="md:w-1/10 hidden md:block border border-white"></div>
      </div>
    </SectionWrapper>
  );
};
