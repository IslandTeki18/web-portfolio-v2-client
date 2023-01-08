import * as React from "react";
import { Button, SectionWrapper } from "~src/components";

type BlogListSectionProps = {};

export const BlogListSection = (props: BlogListSectionProps) => {
  const mockBlogList = [
    {
      id: "qojf304fuh",
      title: "Sample Title One",
      shortDesc:
        "Hey this blog is about is programming, if you love programming then you should read this to gain wonderful insight about the world of programming.",
      dateCreated: "Sept. 13, 2022",
    },
    {
      id: "qojf234r4fuh",
      title: "Sample Title Two",
      shortDesc:
        "Hey this blog is about is programming, if you love programming then you should read this to gain wonderful insight about the world of programming. Hey this blog is about is programming, if you love programming then you should read this to gain wonderful insight about the world of programming.",
      dateCreated: "Sept. 22, 2022",
    },
  ];

  function renderBlogCard() {
    return mockBlogList.map((blog) => (
      <div
        key={blog.id}
        className="border border-white flex flex-col justify-between p-4 w-full md:w-1/2 min-h-[250px]"
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-baseline mb-8">
            <span className="text-2xl font-semibold">{blog.title}</span>
            <i className="fa-solid fa-newspaper text-3xl" />
          </div>
          <span className="text-base mb-4">{blog.shortDesc}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <Button label="Read More" className="border border-white px-4 py-2" />
          <span className="text-base">{blog.dateCreated}</span>
        </div>
      </div>
    ));
  }

  return (
    <SectionWrapper title="My Blog">
      <div className="flex flex-wrap md:flex-nowrap gap-4 text-white pt-8">
        {renderBlogCard()}
      </div>
    </SectionWrapper>
  );
};
