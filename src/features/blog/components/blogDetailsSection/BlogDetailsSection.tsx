import * as React from "react";

type BlogDetailsSectionProps = {
  blog: any;
};

export const BlogDetailsSection = (props: BlogDetailsSectionProps) => {
  return (
    <div className="px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]">
      <div className="card bg-base-100 border border-base-content">
        <div className="card-body flex flex-col gap-2">
          <span className="text-2xl sm:text-4xl font-extrabold tracking-wide uppercase sm:w-3/4">
            {props.blog.title}
          </span>
          <div className="flex flex-col gap-2 sm:flex-row justify-between items-baseline">
            <span className="sm:text-2xl font-medium">{props.blog.subTitle}</span>
            <span className="italic">Posted on {props.blog.datePublished}</span>
          </div>
        </div>
      </div>
      <div className="bg-white text-neutral h-auto p-4 sm:p-6">
        <div className="text-base">{props.blog.content}</div>
      </div>
    </div>
  );
};
