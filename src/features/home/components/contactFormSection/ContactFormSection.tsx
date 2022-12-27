import * as React from "react";
import { SectionHeader } from "~src/components";

type Props = {};

export const ContactFormSection = (props: Props) => {
  return (
    <SectionHeader title="Let's Connect">
      <div className="grid grid-cols-2 gap-6 mt-4">
        <div className="flex flex-col justify-between border border-white text-white p-6">
          <span className="text-2xl font-bold tracking-wide uppercase">
            Let's build something great together
          </span>
          <div className="flex flex-col gap-6 justify-evenly">
            <span className="text-base uppercase">Instagram</span>
            <span className="text-base uppercase">Linkedin</span>
            <span className="text-base uppercase">Twitter</span>
            <span className="text-base uppercase">Github</span>
            <span className="text-base uppercase">Slack</span>
          </div>
        </div>
        <div className="flex flex-col gap-6 justify-between">
          <input
            type="text"
            className="w-full border bg-dark border-white py-2 px-4"
            placeholder="NAME"
          />
          <input
            type="text"
            className="w-full border bg-dark border-white py-2 px-4"
            placeholder="EMAIL"
          />
          <input
            type="text"
            className="w-full border bg-dark border-white py-2 px-4"
            placeholder="WEBSITE TYPE"
          />
          <textarea
            className="border border-white bg-dark py-2 px-4"
            placeholder="TELL ME ABOUT YOUR PROJECT..."
            rows={10}
          ></textarea>
          <button className="border border-white py-2 uppercase text-white w-2/6">
            send
          </button>
        </div>
      </div>
    </SectionHeader>
  );
};
