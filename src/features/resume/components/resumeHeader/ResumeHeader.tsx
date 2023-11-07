import * as React from "react";

type Props = {};

export const ResumeHeader = (props: Props) => {
  return (
    <div className="border-2 border-white p-6 flex flex-col gap-8 text-white animate__animated animate__fadeInDown">
      <div className="flex justify-between flex-col sm:flex-row items-start sm:items-center">
        <span className="text-3xl font-bold uppercase">resume</span>
        <button className="border border-white px-6 py-2 mt-4 sm:mt-0">Download CSV</button>
      </div>
      <span className="text-base">
        I worked primarily in the web development space. I love woodworking, football, video games, working out, and making
        fun things for my family and with my family. I love what I do I want to be able to grow even more in all my areas of interest.
      </span>
    </div>
  );
};
