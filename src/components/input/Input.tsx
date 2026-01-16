import * as React from "react";

type InputProps = {
  name?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string | number;
  hasLabel?: boolean;
  variant?: string; // Keep for backward compatibility but ignore
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  multiple?: boolean;
  accept?: string;
  className?: string;
};

export const Input = (props: InputProps) => {
  return (
    <div className="form-control w-full">
      {props.hasLabel && (
        <label htmlFor={props.id} className="label">
          <span className="label-text">{props.label}</span>
        </label>
      )}
      <input
        name={props.name}
        type={props.type || "text"}
        className={`input input-bordered w-full ${props.className || ""}`}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value || ""}
        onChange={props.onChange}
        required={props.required}
        multiple={props.multiple}
        accept={props.accept}
      />
    </div>
  );
};
