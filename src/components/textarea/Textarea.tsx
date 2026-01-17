import * as React from "react";

type TextareaProps = {
  name?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  hasLabel?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean;
  rows?: number;
  cols?: number;
  className?: string;
};

export const Textarea = (props: TextareaProps) => {
  return (
    <div className="form-control w-full">
      {props.hasLabel && (
        <label htmlFor={props.id} className="label">
          <span className="label-text">{props.label}</span>
        </label>
      )}
      <textarea
        name={props.name}
        className={`
          textarea textarea-bordered w-full
          focus:ring-2 focus:ring-success focus:ring-opacity-50
          focus:shadow-glow-green
          transition-shadow duration-300
          ${props.className || ""}
        `}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value || ""}
        onChange={props.onChange}
        required={props.required}
        rows={props.rows || 4}
        cols={props.cols}
      />
    </div>
  );
};
