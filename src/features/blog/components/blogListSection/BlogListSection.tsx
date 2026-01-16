import * as React from "react";
import { SectionWrapper, Button } from "~src/components";
import { useNavigate } from "react-router-dom";

type BlogListSectionProps = {};

export const BlogListSection = (props: BlogListSectionProps) => {
  const navigate = useNavigate();
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
        className="card bg-base-100 border border-base-content w-full md:w-1/2 min-h-[250px]"
      >
        <div className="card-body flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="flex justify-between items-baseline mb-8">
              <span className="text-2xl font-semibold">{blog.title}</span>
              <i className="fa-solid fa-newspaper text-3xl" />
            </div>
            <span className="text-base mb-4">{blog.shortDesc}</span>
          </div>
          <div className="flex justify-between items-baseline">
            <Button
              label="Read More"
              onClick={() => navigate(`/blog/${blog.id}`)}
              variant="neutral"
            />
            <span className="text-base">{blog.dateCreated}</span>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <SectionWrapper title="My Blog">
      <div className="flex flex-wrap md:flex-nowrap gap-4 pt-8">
        {renderBlogCard()}
      </div>
    </SectionWrapper>
  );
};
