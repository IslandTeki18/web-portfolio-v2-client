import * as React from "react";
import { useState } from "react";

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
  variant?: "light" | "dark";
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
    <div className="w-full">
      {props.hasLabel && (
        <label
          htmlFor={`${props.name}Input`}
          className={`block text-sm font-medium leading-6 ${
            props.variant === "dark" ? "text-white" : "text-dark"
          }`}
        >
          {props.labelText}
          {props.hasRequiredIndicator && (
            <span className="text-red-600">*</span>
          )}
        </label>
      )}
      <select
        id={`${props.name}Input`}
        name={props.name}
        className={`mt-2 block w-full border py-2 pl-3 pr-10 
          ring-1 ring-white ring-inset focus:ring-2 focus:ring-accent/70 sm:text-sm sm:leading-6
          ${
            props.variant === "dark"
              ? "bg-dark text-white"
              : "bg-white text-dark"
          } 
          `}
        value={props.value}
        defaultValue={props.placeholder}
        onChange={props.onChange}
      >
        <option>{props.placeholder || "Select Option..."}</option>
        {renderOptions()}
      </select>
      {props.hasError && (
        <p className="text-red-500 text-sm mt-2">This field is required</p>
      )}
    </div>
  );
};
