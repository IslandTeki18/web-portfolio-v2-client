import * as React from "react";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { classNames } from "~src/utils";

type ToggleProps = {
  isChecked: boolean;
  onToggle: (value: boolean) => void;
};

export const Toggle = (props: ToggleProps) => {
  const [enabled, setEnabled] = useState(props.isChecked);
  useEffect(() => {
    props.onToggle(enabled);
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? "bg-indigo-600" : "bg-gray-200",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
      )}
    >
      <span className="sr-only">Use Toggle</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      />
    </Switch>
  );
};
