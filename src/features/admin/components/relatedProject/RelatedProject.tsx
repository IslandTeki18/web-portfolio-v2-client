import * as React from "react";
import { useState, useEffect } from "react";
import { IRelatedProject } from "~src/types";
import { LabelInput } from "~src/components/molecules";

type RelatedProjectProps = {
  relatedProjects: IRelatedProject[];
};

export const RelatedProject = (props: RelatedProjectProps) => {
  const [relatedProjects, setRelatedProjects] = useState<IRelatedProject[]>([]);
  const [project, setProject] = useState<IRelatedProject>({
    title: "",
    projectType: "",
    link: "",
    tags: [''],
  });
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const inputName = e.target.name.split("Input");
    setProject((prev) => {
      return {
        ...prev,
        [inputName[0]]: e.target.value,
      };
    });
  }

  useEffect(() => {
    if (props.relatedProjects) {
      setRelatedProjects(props.relatedProjects);
    }
  }, [props.relatedProjects]);

  function renderRelatedProjects() {
    if (relatedProjects.length === 0) return(
      <div className="flex flex-col gap-4 text-white w-full border rounded-lg p-4">
        <span className="text-xl font-semibold">No Related Projects</span>
      </div>
    );
    return relatedProjects.map((project, index) => (
      <div
        key={index}
        className="flex flex-col gap-4 text-white w-full border rounded-lg p-4"
      >
        <span className="text-xl font-semibold">{project.title}</span>
        <div className="flex flex-col gap-4">
          <span>
            <strong>Link:</strong> {project.link}
          </span>
          <span>
            <strong>Project Type:</strong> {project.projectType}
          </span>
          <span className="flex gap-2 flex-wrap">
            <strong>Tags:</strong>
            {project.tags?.map((x) => (
              <div className="p-2 bg-primary-500 rounded-full w-fit">{x}</div>
            ))}
          </span>
        </div>
      </div>
    ));
  }
  
  return (
    <div className="flex flex-col gap-4 text-white w-full">
      <span className="text-3xl font-semibold">Related Projects</span>
      <div className="flex flex-col gap-4">
        <LabelInput
          type="text"
          onChange={onChangeHandler}
          label="Title"
          name="titleInput"
          value={project.title}
          placeholder="Title..."
        />
        <LabelInput
          type="text"
          onChange={onChangeHandler}
          label="Project Type"
          name="projectTypeInput"
          value={project.projectType}
          placeholder="Project Type..."
        />
        <LabelInput
          type="text"
          onChange={onChangeHandler}
          label="Link"
          name="linkInput"
          value={project.link}
          placeholder="Link..."
        />
        <LabelInput
          type="text"
          onChange={onChangeHandler}
          label="Tags"
          name="tagsInput"
          value={project.tags && project.tags}
          placeholder="Tags..."
        />
      </div>
      {renderRelatedProjects()}
    </div>
  );
};
