import * as React from "react";
import { useState } from "react";
import { Button, Input, Textarea } from "~src/components";

type DevFeedbackFormProps = {
  callback: (data: { title: string; description: string }) => void;
};

export const DevFeedbackForm = (props: DevFeedbackFormProps) => {
  const [devFeedObj, setDevFeedObj] = useState({
    title: "",
    description: "",
  });

  function handleDevFeedOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.callback(devFeedObj);
  }
  return (
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
  );
};
