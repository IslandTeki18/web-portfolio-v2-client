import * as React from "react";
import { useState } from "react";
import { Button } from "~src/components";
import { LabelInput, LabelTextArea } from "~src/components/molecules";
import { IDeveloperFeedback } from "~src/types";
import { formatDate } from "~src/utils";
import { projectDetailsState } from "~src/stores";
import { useSetRecoilState } from "recoil";
import { createDeveloperFeedback } from "../../api";

type DeveloperFeedbackProps = {
  projectId: string;
  feedbacks: IDeveloperFeedback[];
};

export const DeveloperFeedback = (props: DeveloperFeedbackProps) => {
  const setNewProjectDetails = useSetRecoilState(projectDetailsState);
  const [feedbackObj, setFeedbackObj] = useState<IDeveloperFeedback>({
    title: "",
    description: "",
  });

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.name.split("Input");
    setFeedbackObj((prev) => {
      return {
        ...prev,
        [input[0]]: e.target.value,
      };
    });
  }

  async function onSumbitHandler() {
    try {
      const data = await createDeveloperFeedback(
        props.projectId,
        feedbackObj.title,
        feedbackObj.description
      );
      setNewProjectDetails(data);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  }

  function renderRecentFeedbacks() {
    if (!props.feedbacks) {
      return <span className="text-lg">No Feedbacks Yet.</span>;
    }
    return props.feedbacks.map((item) => (
      <div className="flex justify-between items-center border border-white rounded p-4" key={item._id}>
        <div
          className="w-3/4 flex flex-col text-left"
          
        >
          <span className="text-lg font-semibold mb-2">{item.title}</span>
          <span>{item.description}</span>
          <span>Created: {formatDate(item.createdAt || "", "en-US")}</span>
        </div>
        <div className="w-1/4">
            <Button label="remove" />
        </div>
      </div>
    ));
  }
  return (
    <div className="flex flex-col gap-4 text-white w-full">
      <span className="text-3xl font-semibold">Developer Feedback</span>
      <LabelInput
        name="titleInput"
        label="Title"
        placeholder="Feedback Title..."
        value={feedbackObj.title}
        onChange={onChangeHandler}
      />
      <LabelTextArea
        name="descriptionInput"
        label="Description"
        value={feedbackObj.description}
        onChange={onChangeHandler}
        placeholder="Feedback Description..."
      />
      <Button label="Submit" onClick={onSumbitHandler} />
      <hr />
      <span className="text-2xl">Recent Feedback</span>
      <div className="flex flex-col gap-2">{renderRecentFeedbacks()}</div>
    </div>
  );
};
