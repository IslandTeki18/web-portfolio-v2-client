import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "~src/components";
import { LabelInput, LabelTextArea } from "~src/components/molecules";
import { IDeveloperFeedback } from "~src/types";
import { formatDate } from "~src/utils";
import { projectDetailsState } from "~src/stores";
import { useSetRecoilState } from "recoil";
import {
  createDeveloperFeedback,
  removeDeveloperFeedback,
  updateDeveloperFeedback,
} from "../../api";

type DeveloperFeedbackProps = {
  projectId: string;
  feedbacks: IDeveloperFeedback[];
};

export const DeveloperFeedback = (props: DeveloperFeedbackProps) => {
  const setNewProjectDetails = useSetRecoilState(projectDetailsState);
  const [feedbacks, setFeedbacks] = useState<IDeveloperFeedback[]>([]);
  const [feedbackObj, setFeedbackObj] = useState<IDeveloperFeedback>({
    title: "",
    description: "",
  });
  const [feedbackEditObj, setFeedbackEditObj] = useState<IDeveloperFeedback>({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (props.feedbacks) {
      setFeedbacks(props.feedbacks);
    }
  }, [props.feedbacks]);
  const [showFeedbackEditFormArray, setShowFeedbackEditFormArray] = useState(
    feedbacks.map(() => false)
  );

  function onToggleFeedbackForm(index: number) {
    setShowFeedbackEditFormArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = !newArray[index];
      return newArray;
    });
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.name.split("Input");
    setFeedbackObj((prev) => {
      return {
        ...prev,
        [input[0]]: e.target.value,
      };
    });
  }

  function onEditChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.name.split("Input");
    setFeedbackEditObj((prev) => {
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
      setFeedbackObj({
        title: "",
        description: "",
      });
    } catch (error) {
      console.error("ERROR: ", error);
    }
  }

  async function onDeleteFeedbackHandler(feedbackId: string) {
    try {
      const { message, project } = await removeDeveloperFeedback(
        feedbackId,
        props.projectId
      );
      setNewProjectDetails(project);
    } catch (error) {
      console.error(error);
    }
  }

  async function onUpdateFeedbackHandler(feedbackId: string) {
    try {
      const { message, project } = await updateDeveloperFeedback(
        props.projectId,
        feedbackId,
        feedbackEditObj
      );
      setNewProjectDetails(project);
    } catch (error) {
      console.error(error);
    }
  }

  function renderRecentFeedbacks() {
    if (feedbacks.length === 0) {
      return <span className="text-lg">No Feedbacks Yet.</span>;
    }
    return feedbacks.map((item, index) => (
      <div
        className="flex flex-row gap-6 border border-white rounded p-4"
        key={item._id}
      >
        <div className="w-full lg:w-3/4 flex flex-col gap-4 text-left">
          <span className="text-xl font-semibold mb-2">{item.title}</span>
          <span className="text-lg">{item.description}</span>
          <span>Created: {formatDate(item.createdAt || "", "en-US")}</span>
          {showFeedbackEditFormArray[index] && (
            <div className={`flex flex-col gap-2 w-full`}>
              <LabelInput
                name="titleInput"
                label="Title"
                placeholder="Change Title..."
                value={feedbackObj.title}
                onChange={onEditChangeHandler}
              />
              <LabelTextArea
                name="descriptionInput"
                label="Description"
                value={feedbackObj.description}
                onChange={onEditChangeHandler}
                placeholder="Change Description..."
              />
              <Button
                label="Submit"
                onClick={() => onUpdateFeedbackHandler(item._id as string)}
              />
            </div>
          )}
        </div>

        <div className="flex md:flex-col justify-end gap-4 w-full lg:w-1/4">
          <Button
            className="h-fit"
            variant="danger"
            labelColor="light"
            label="remove"
            onClick={() => onDeleteFeedbackHandler(item._id as string)}
          />
          <Button
            className="h-fit"
            variant="primary"
            labelColor="light"
            label="edit"
            onClick={() => onToggleFeedbackForm(index)}
          />
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
