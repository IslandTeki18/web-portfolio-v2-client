import * as React from "react";
import { Input } from "~src/components/input";

type LabelInputProps = {
  id?: string;
  label: string;
  type?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: any;
  name?: string;
  placeholder?: string;
};

export const LabelInput = (props: LabelInputProps) => {
  return (
    <div className="flex flex-col gap-1 justify-start w-full">
      <label htmlFor={props.id || "LabelInput"} className="text-white">
        {props.label}
      </label>
      <Input
        type={props.type || "text"}
        onChange={props.onChange}
        id={props.id || "LabelInput"}
        value={props.value}
        name={props.name || "LabelInput"}
        placeholder={props.placeholder}
      />
    </div>
  );
};
