import * as React from "react";
import { Textarea } from "~src/components/textarea";

type LabelTextAreaProps = {
  id?: string;
  label: string;
  onChange: any;
  value: any;
  name?: string;
  placeholder?: string;
};

export const LabelTextArea = (props: LabelTextAreaProps) => {
  return (
    <div className="flex flex-col gap-1 justify-start w-full">
      <label htmlFor={props.id || "LabelTextArea"} className="text-white">
        {props.label}
      </label>
      <Textarea
        placeholder={props.placeholder || ""}
        onChange={props.onChange}
        id={props.id || "LabelTextArea"}
        value={props.value}
        name={props.name || "LabelTextArea"}
      />
    </div>
  );
};
