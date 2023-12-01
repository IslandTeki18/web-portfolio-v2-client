import * as React from "react";
import { useState, useEffect } from "react";
import { Toggle } from "~src/components/toggle";

type LabelToggleProps = {
  id?: string;
  label: string;
  isChecked: boolean;
  onToggle: (val: boolean) => void;
};

export const LabelToggle = (props: LabelToggleProps) => {
  const [enabled, setEnabled] = useState(props.isChecked)
  useEffect(() => {
    props.onToggle(enabled)
  }, [enabled])
  return (
    <div className="flex flex-col gap-1 justify-start w-full">
      <label htmlFor={props.id || "LabelInput"} className="text-white">
        {props.label}
      </label>
      <Toggle isChecked={enabled} onToggle={(val) => {
        setEnabled(val)
      }} />
    </div>
  );
};
