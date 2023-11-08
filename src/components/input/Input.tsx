import * as React from "react";

type InputProps = {
  name?: string;
  type?: string;
  id?: string;
  placeholder?: string;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  required?: boolean;
  multiple?: boolean;
};

export const Input = (props: InputProps) => {
  return (
    <input
      name={props.name}
      type={props.type}
      className={`text-white w-full border bg-dark border-white py-2 px-4`}
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
  multiple: false,
  required: false,
};
