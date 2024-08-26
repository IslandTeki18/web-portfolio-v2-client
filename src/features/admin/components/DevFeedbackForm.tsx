import * as React from "react";
import { useState } from "react";
import { Button, Input, Textarea } from "~src/components";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

type DevFeedbackFormProps = {
  callback: (data: { title: string; description: string }) => void;
};

export const DevFeedbackForm = (props: DevFeedbackFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [devFeedObj, setDevFeedObj] = useState({
    title: "",
    description: "",
  });

  function handleDevFeedOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.callback(devFeedObj);
    setDevFeedObj({
      title: "",
      description: "",
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
        <span className="text-base font-medium">Feedback Form</span>
        {isOpen ? (
          <ChevronUpIcon className="h-8 w-8" />
        ) : (
          <ChevronDownIcon className="h-8 w-8" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${onToggle()} py-2`}
      >
        <form onSubmit={handleDevFeedOnSubmit}>
          <div className="flex flex-col gap-4">
            <Input
              hasLabel
              label="Title"
              name="title"
              placeholder="Enter feedback title..."
              type="text"
              onChange={(e) =>
                setDevFeedObj((prev) => {
                  return {
                    ...prev,
                    title: e.target.value,
                  };
                })
              }
              value={devFeedObj.title}
            />
            <Textarea
              label="Description"
              hasLabel
              placeholder="Enter feedback description..."
              value={devFeedObj.description}
              name="description"
              onChange={(e) =>
                setDevFeedObj((prev) => {
                  return {
                    ...prev,
                    description: e.target.value,
                  };
                })
              }
            />
            <Button
              label="Submit Feedback"
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
