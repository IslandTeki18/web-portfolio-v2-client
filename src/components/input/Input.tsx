import * as React from "react";

type InputProps = {
  name?: string;
  type?: string;
  id?: string;
  placeholder?: string;
  value?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  multiple?: boolean;
  hasLabel?: boolean;
  label?: string;
  variant?: "light" | "dark";
  accept?: string;
};

export const Input = (props: InputProps) => {
  return (
    <div>
      {props.hasLabel && (
        <label
          htmlFor={props.id}
          className={`block text-sm font-medium leading-6 ${
            props.variant === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          {props.label}
        </label>
      )}
      <div className="mt-2">
        <input
          name={props.name}
          type={props.type}
          className={`w-full border ${
            props.variant === "light"
              ? "text-gray-1000 bg-white border-dark"
              : "text-white bg-dark border-white"
          } py-2 px-4`}
          id={props.id}
          placeholder={props.placeholder}
          value={props.value || ""}
          onChange={props.onChange}
          required={props.required}
          multiple={props.multiple}
          accept={props.accept && props.accept}
        />
      </div>
    </div>
  );
};
