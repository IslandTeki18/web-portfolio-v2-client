import * as React from "react";
import { useState, useEffect } from "react";
import { Select } from "~src/components/select";

type LabelSelectProps = {
  items: any[];
  onSelection: (val: any) => void;
  id?: string;
  label?: string;
  value: string;
};

export const LabelSelect = (props: LabelSelectProps) => {
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    props.onSelection(selectedItem);
  }, [selectedItem]);

  return (
    <div className="flex flex-col gap-1 justify-start w-full">
      <label htmlFor={props.id || "LabelInput"} className="text-white">
        {props.label}
      </label>
      <Select
        items={props.items}
        onSelection={(val) => setSelectedItem(val)}
        value={props.value}
      />
    </div>
  );
};
