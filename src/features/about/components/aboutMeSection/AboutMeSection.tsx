import * as React from "react";
import { SectionWrapper } from "~src/components";
import { BIO, BIO_POINTS, BIO_SOCIAL } from "../../utils/defaults";
//@ts-ignore
import familyImage from "../../assets/family.jpg"

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
      <a
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        key={idx}
        className="py-4"
      >
        <i className={`${social.icon} text-4xl md:text-6xl`} />
      </a>
    ));
  }
  return (
    <SectionWrapper title="About Me">
      <div className="flex flex-wrap md:flex-nowrap gap-4 mt-4 text-white">
        <div className="border border-white p-8 flex flex-col gap-4 w-full lg:w-6/10 animate__animated animate__fadeInLeft">
          <span className="font-semibold text-2xl uppercase">
            Landon McKell
          </span>
          <span className="text-base">{BIO}</span>
          <div className="flex flex-wrap gap-y-4 mb-6">{renderBioPoints()}</div>
          <div className="flex justify-between items-center">
            {renderSocialIcons()}
          </div>
        </div>
        <div className="border border-white hidden lg:flex lg:w-4/10 animate__animated animate__fadeInRight">
          <img
            className="object-cover"
            src={familyImage}
            alt="family"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
