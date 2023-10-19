import * as React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
  type?: string;
  name?: string;
  buttonType?: string;
  labelColor?: string;
  id?: string;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  function setButtonType(type: string) {
    switch (type) {
      case "dark":
        return "bg-dark hover:bg-slate-200 focus-visible:outline-slate-600";
      case "primary":
        return "bg-primary-500 hover:bg-primary-400 focus-visible:outline-primary-600";
      case "secondary":
        return "bg-secondary-500 hover:bg-secondary-400 focus-visible:outline-secondary-600";
      case "danger":
        return "bg-danger-500 hover:bg-danger-400 focus-visible:outline-danger-600";
      default:
        return "bg-dark hover:bg-slate-400 focus-visible:outline-slate-600";
    }
  }

  function setButtonTextColor(color: string) {
    switch (color) {
      case "dark":
        return "text-dark";
      default:
        return "text-white";
    }
  }

  return (
    <button
      id={props.id}
      onClick={props.onClick}
      name={props.name}
      disabled={props.isDisabled}
      className={`${setButtonType(
        props.buttonType || "dark"
      )} ${setButtonTextColor(props.labelColor || "white")} ${
        props.className
      } px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
    >
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  buttonType: "dark",
  label: "Example",
  labelColor: "white",
  isDisabled: false,
  className: "",
};
