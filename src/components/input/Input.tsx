import * as React from "react";

type InputProps = {
  name?: string;
  type?: string;
  className?: string;
  id?: string;
  placeholder?: string;
  value?: any;
  onChange?: () => void;
  required?: boolean;
  multiple?: boolean;
};

export const Input = (props: InputProps) => {
  return (
    <input
      name={props.name}
      type={props.type}
      className={`${props.className}`}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
      multiple={props.multiple}
    />
  );
};

Input.defaultProps = {
  className: "",
  multiple: false,
  required: false,
};
