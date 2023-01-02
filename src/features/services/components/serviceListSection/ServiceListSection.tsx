import * as React from "react";
import { SectionHeader } from "~src/components";

type ServiceListSectionProps = {};

export const ServiceListSection = (props: ServiceListSectionProps) => {
  const mockServices = [
    {
      title: "Service One",
      serviceDescription:
        "This is a brief description that is suppose to highlight small details about the service",
    },
    {
      title: "Service One",
      serviceDescription:
        "This is a brief description that is suppose to highlight small details about the service",
    },
    {
      title: "Service One",
      serviceDescription:
        "This is a brief description that is suppose to highlight small details about the service",
    },
    {
      title: "Service One",
      serviceDescription:
        "This is a brief description that is suppose to highlight small details about the service",
    },
  ];

  function renderServiceCards() {
    return mockServices.map((service) => (
      <div className="border border-white p-6 text-white min-w-[16rem] w-full h-52 flex flex-col justify-between">
        <div className="flex justify-between align-baseline">
          <span className="uppercase font-bold">{service.title}</span>
          <i className="fa-solid fa-code text-2xl"></i>
        </div>
        <span>{service.serviceDescription}</span>
      </div>
    ));
  }

  return (
    <SectionHeader title="My services" viewAllLink="services">
      <div className="flex mt-4 gap-4">
        <div className="w-full ">
          <div className="grid grid-cols-3">{renderServiceCards()}</div>
        </div>
      </div>
    </SectionHeader>
  );
};
