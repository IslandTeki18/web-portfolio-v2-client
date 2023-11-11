import * as React from "react";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import meImage from "../../../../assets/images/Me.jpeg";

type IntroductionSectionProps = {};

export const IntroductionSection = (props: IntroductionSectionProps) => {
  const navigate = useNavigate();
  return (
    <div className="bg-dark flex flex-wrap gap-4 md:max-h-[961px] px-[3%] sm:px-[8%] 2xl:px-[16.666%] animate__animated animate__fadeInUp">
      <div className="flex-1 shrink-0 lg:flex-2">
        <div className="p-6 md:p-12 h-full max-h-[785px] border border-white flex flex-col justify-between text-white">
          <div className="flex flex-col pb-6 w-full">
            <span className="font-bold text-2xl uppercase">Hi,</span>
            <span className="font-bold text-2xl uppercase mb-14">
              my name is landon mckell
            </span>
            <span className="text-base uppercase tracking-wider">
              I am full stack developer living in the Utah area <br />
              <br /> I am a web developer with extensive experience in creating
              large and complex websites. I specialize in using beautiful design
              patterns, best practices, and Bob Martin's Clean Code and
              Screaming Architecture to build simple yet powerful web
              applications.
              <br />
              <br />
              Additionally, I have extensive experience in building complex web
              servers that are both robust and secure.
            </span>
          </div>
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="border border-white px-6 py-2 w-60 uppercase hover:border-transparent hover:bg-gray-100 hover:text-dark"
          >
            Contact me for work
          </button>
        </div>
      </div>
      <div className="flex-1 shrink-0 hidden lg:block">
        <div className="h-full max-h-[785px] border border-white">
          <img
            className="w-full h-auto max-h-[783px] object-cover"
            src={meImage}
          />
        </div>
      </div>
    </div>
  );
};
