import * as React from "react";
import { SectionWrapper } from "~src/components";
import { BIO, BIO_SOCIAL } from "../../utils/defaults";
//@ts-ignore
import familyImage from "../../assets/family.jpg"

type AboutMeSectionProps = {};

export const AboutMeSection = (props: AboutMeSectionProps) => {


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
      <div className="flex flex-wrap md:flex-nowrap gap-4 mt-4">
        <div className="card bg-base-100 border border-base-content w-full lg:w-6/10 animate__animated animate__fadeInLeft">
          <div className="card-body flex flex-col gap-4">
            <span className="font-semibold text-2xl uppercase">
              Landon McKell
            </span>
            <span className="text-base">{BIO}</span>
            <div className="flex justify-between items-center">
              {renderSocialIcons()}
            </div>
          </div>
        </div>
        <div className="card bg-base-100 border border-base-content hidden lg:flex lg:w-4/10 animate__animated animate__fadeInRight overflow-hidden p-0">
          <img
            className="object-cover w-full h-full"
            src={familyImage}
            alt="family"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
