import * as React from "react";

type ToggleProps = {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  hasLabel?: boolean;
  label?: string;
  hasRequiredIndicator?: boolean;
  name?: string;
};

export const Toggle = (props: ToggleProps) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        {props.hasLabel && (
          <span className="label-text">
            {props.label}
            {props.hasRequiredIndicator && (
              <span className="text-error">*</span>
            )}
          </span>
        )}
        <input
          type="checkbox"
          checked={props.checked}
          onChange={(e) => props.onChange(e.target.checked)}
          className="toggle toggle-success"
          id={`${props.name}Input`}
        />
      </label>
    </div>
  );
};
