import * as React from "react";
import { SectionWrapper } from "~src/components";

type Props = {};

export const ContactFormSection = (props: Props) => {
  return (
    <SectionWrapper title="Let's Connect">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        <div
          id="social-links"
          className="flex flex-col justify-between border border-white text-white p-6"
        >
          <span className="text-2xl font-bold tracking-wide uppercase">
            Let's build something great together
          </span>
          <div className="flex flex-col gap-4 justify-evenly">
            <a
              href="https://www.instagram.com/landon.mckell/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base uppercase">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/landon-mckell/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base uppercase">Linkedin</span>
            </a>
            <a
              href="https://twitter.com/MckellLandon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base uppercase">Twitter</span>
            </a>
            <a
              href="https://github.com/IslandTeki18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base uppercase">Github</span>
            </a>
          </div>
        </div>
        <div id="contact-form" className="flex flex-col gap-6 justify-between">
          <input
            type="text"
            className="text-white w-full border bg-dark border-white py-2 px-4"
            placeholder="NAME"
          />
          <input
            type="email"
            className="text-white w-full border bg-dark border-white py-2 px-4"
            placeholder="EMAIL"
          />
          <input
            type="text"
            className="text-white w-full border bg-dark border-white py-2 px-4"
            placeholder="WEBSITE TYPE"
          />
          <textarea
            className="text-white border border-white bg-dark py-2 px-4"
            placeholder="TELL ME ABOUT YOUR PROJECT..."
            rows={5}
          ></textarea>
          <button className="border border-white py-2 uppercase text-white w-2/6 hover:bg-white hover:text-dark">
            send
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};
