import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button, TerminalWindow, CommandPrompt } from "~src/components";
//@ts-ignore
import meImage from "~src/features/home/assets/Me.jpeg"


export const IntroductionSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-4 md:max-h-[961px] px-[3%] sm:px-[8%] 2xl:px-[16.666%] animate__animated animate__fadeInUp">
      <div className="flex-1 shrink-0 lg:flex-2">
        <TerminalWindow showChrome title="~/landon-mckell" glowColor="green" className="h-full max-h-[785px]">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col pb-6 w-full space-y-4">
              <CommandPrompt status="ready">
                <span className="text-primary font-bold text-2xl">whoami</span>
              </CommandPrompt>
              <div className="pl-6 space-y-2">
                <span className="block text-base-content">Landon McKell</span>
                <span className="block text-secondary">Full Stack Developer</span>
                <span className="block text-base-content opacity-70">Location: Utah</span>
              </div>

              <CommandPrompt status="ready">
                <span className="text-primary font-bold text-2xl">cat ~/about.txt</span>
              </CommandPrompt>
              <div className="pl-6 text-base text-base-content leading-relaxed space-y-3">
                <p>
                  I am a web developer with extensive experience in creating
                  large and complex websites. I specialize in using beautiful design
                  patterns, best practices, and Bob Martin's Clean Code and
                  Screaming Architecture to build simple yet powerful web
                  applications.
                </p>
                <p>
                  Additionally, I have extensive experience in building complex web
                  servers that are both robust and secure.
                </p>
              </div>
            </div>
            <Button
              label="./contact.sh --hire"
              onClick={() => navigate("/contact")}
              variant="success"
              className="w-60"
            />
          </div>
        </TerminalWindow>
      </div>
      <div className="flex-1 shrink-0 hidden lg:block">
        <TerminalWindow showChrome title="~/profile-image" glowColor="purple" className="h-full max-h-[785px] overflow-hidden">
          <img
            className="w-full h-auto object-cover rounded"
            src={meImage}
            alt="Landon McKell"
          />
        </TerminalWindow>
      </div>
    </div>
  );
};
