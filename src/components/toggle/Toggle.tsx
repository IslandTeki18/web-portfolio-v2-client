import * as React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";

type ToggleProps = {
  enabled?: boolean;
  onChange: (checked: boolean) => void;
  hasLabel?: boolean;
  label?: string;
  hasRequiredIndicator?: boolean;
  name?: string;
  variant?: "light" | "dark";
};

export const Toggle = (props: ToggleProps) => {
  return (
    <div className="flex justify-between items-center">
      {props.hasLabel && (
        <label
          htmlFor={`${props.name}Input`}
          className={`block text-sm font-medium leading-6 ${
            props.variant === "dark" ? "text-white" : "text-dark"
          }`}
        >
          {props.label}
          {props.hasRequiredIndicator && (
            <span className="text-red-600">*</span>
          )}
        </label>
      )}
      <Switch
        checked={props.enabled}
        onChange={props.onChange}
        className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 data-[checked]:bg-green-600"
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
        />
      </Switch>
    </div>
  );
};
