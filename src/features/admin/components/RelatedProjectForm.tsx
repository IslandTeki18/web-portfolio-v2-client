import * as React from "react";
import { useState } from "react";
import { Button, Input } from "~src/components";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

type RelatedProjectFormProps = {
  callback: (data: {
    title: string;
    projectType: string;
    link: string;
  }) => void;
};

export const RelatedProjectForm = (props: RelatedProjectFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [relatedProjectObj, setRelatedProjectObj] = useState({
    title: "",
    projectType: "",
    link: "",
  });

  function handleRelatedProjectOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.callback(relatedProjectObj);
    setRelatedProjectObj({
      title: "",
      projectType: "",
      link: "",
    });
  }

  function onToggle() {
    switch (isOpen) {
      case true:
        return "max-h-96 opacity-100";
      case false:
        return "max-h-0 opacity-0";
    }
  }
  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center bg-dark border border-white text-white focus:outline-none py-3 px-4"
      >
        <span className="text-base font-medium">Related Form</span>
        {isOpen ? (
          <ChevronUpIcon className="h-8 w-8" />
        ) : (
          <ChevronDownIcon className="h-8 w-8" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${onToggle()} py-2`}
      >
        <form onSubmit={handleRelatedProjectOnSubmit}>
          <div className="flex flex-col gap-4">
            <Input
              hasLabel
              label="Project Title"
              name="title"
              placeholder="Enter related project title..."
              type="text"
              onChange={(e) =>
                setRelatedProjectObj((prev) => {
                  return {
                    ...prev,
                    title: e.target.value,
                  };
                })
              }
              value={relatedProjectObj.title}
            />
            <Input
              hasLabel
              label="Project Type"
              name="projectType"
              placeholder="Enter related project type..."
              type="text"
              onChange={(e) =>
                setRelatedProjectObj((prev) => {
                  return {
                    ...prev,
                    projectType: e.target.value,
                  };
                })
              }
              value={relatedProjectObj.projectType}
            />
            <Input
              hasLabel
              label="Link"
              name="link"
              placeholder="Enter related project link..."
              type="text"
              onChange={(e) =>
                setRelatedProjectObj((prev) => {
                  return {
                    ...prev,
                    link: e.target.value,
                  };
                })
              }
              value={relatedProjectObj.link}
            />
            <Button
              label="Submit Related Project"
              type="submit"
              variant="dark"
              labelColor="light"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
