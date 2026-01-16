import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "~src/components";
//@ts-ignore
import meImage from "~src/features/home/assets/Me.jpeg"

type IntroductionSectionProps = {};

export const IntroductionSection = (props: IntroductionSectionProps) => {
  const navigate = useNavigate();
  return (
    <div className="bg-base-100 flex flex-wrap gap-4 md:max-h-[961px] px-[3%] sm:px-[8%] 2xl:px-[16.666%] animate__animated animate__fadeInUp">
      <div className="flex-1 shrink-0 lg:flex-2">
        <div className="card bg-base-100 border border-base-content h-full max-h-[785px]">
          <div className="card-body flex flex-col justify-between">
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
            <Button
              label="Contact me for work"
              onClick={() => navigate("/contact")}
              variant="neutral"
              className="w-60 uppercase"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 shrink-0 hidden lg:block">
        <div className="card bg-base-100 border border-base-content h-full max-h-[785px] overflow-hidden p-0">
          <img
            className="w-full h-auto max-h-[783px] object-cover"
            src={meImage}
          />
        </div>
      </div>
    </div>
  );
};
