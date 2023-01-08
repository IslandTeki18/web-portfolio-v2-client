import * as React from "react";
import { Link } from "react-router-dom";
import { SectionWrapper } from "~src/components";
import { BIO, BIO_POINTS, BIO_SOCIAL } from "../../utils/defaults";

type AboutMeSectionProps = {};

export const AboutMeSection = (props: AboutMeSectionProps) => {
  function renderBioPoints() {
    return BIO_POINTS.map((bio, idx) => (
      <div className="flex items-center gap-2 w-full md:w-1/2" key={idx}>
        <i className="fa-solid fa-circle-chevron-right" />
        <span className="uppercase font-semibold">{bio.title}:</span>
        <span className="lg:text-ellipsis overflow-hidden">{bio.value}</span>
      </div>
    ));
  }

  function renderSocialIcons() {
    return BIO_SOCIAL.map((social, idx) => (
      <Link to={social.link} key={idx} className="py-4">
        <i className={`${social.icon} text-4xl md:text-6xl`} />
      </Link>
    ));
  }
  return (
    <SectionWrapper title="About Me">
      <div className="flex flex-wrap md:flex-nowrap gap-4 mt-4 text-white">
        <div className="border border-white p-8 flex flex-col gap-4 w-full md:w-6/10">
          <span className="font-semibold text-2xl uppercase">
            Landon McKell
          </span>
          <span className="text-base">{BIO}</span>
          <div className="flex flex-wrap gap-y-4 mb-6">{renderBioPoints()}</div>
          <div className="flex justify-between items-center">
            {renderSocialIcons()}
          </div>
        </div>
        <div className="border border-white hidden md:block md:w-4/10">
          <img
            className="w-full h-auto max-h-[623px] object-cover"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="landonmckell"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
