import * as React from "react";

type LabelSelectProps = {
  optionItems: OptionItems[];
  name?: string;
  id?: string;
  placeholder?: string;
  hasLabel?: boolean;
  hasError?: boolean;
  labelText?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  hasRequiredIndicator?: boolean;
  value: string;
};

type OptionItems = {
  value: string;
  label: string;
};

export const Select = (props: LabelSelectProps) => {
  function renderOptions() {
    return props.optionItems.map((item) => {
      return (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      );
    });
  }

  return (
    <div className="form-control w-full">
      {props.hasLabel && (
        <label htmlFor={`${props.name}Input`} className="label">
          <span className="label-text">
            {props.labelText}
            {props.hasRequiredIndicator && (
              <span className="text-error">*</span>
            )}
          </span>
        </label>
      )}
      <select
        id={`${props.name}Input`}
        name={props.name}
        className="
          select select-bordered w-full
          focus:ring-2 focus:ring-success focus:ring-opacity-50
          focus:shadow-glow-green
          transition-shadow duration-300
        "
        value={props.value}
        defaultValue={props.placeholder}
        onChange={props.onChange}
      >
        <option>{props.placeholder || "Select Option..."}</option>
        {renderOptions()}
      </select>
      {props.hasError && (
        <label className="label">
          <span className="label-text-alt text-error">This field is required</span>
        </label>
      )}
    </div>
  );
};
