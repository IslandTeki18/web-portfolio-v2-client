import * as React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
  type?: string;
  name?: string;
  variant?: "dark" | "primary" | "success" | "danger" | "secondary";
  labelColor?: "dark" | "light";
  id?: string;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  function setButtonType(type: string) {
    switch (type) {
      case "dark":
        return "bg-dark hover:bg-dark/70 focus-visible:outline-slate-600 border border-white";
      case "primary":
        return "bg-primary-500 hover:bg-primary-400 focus-visible:outline-primary-600";
      case "secondary":
        return "bg-secondary-500 hover:bg-secondary-300 focus-visible:outline-secondary-600";
      case "danger":
        return "bg-danger-500 hover:bg-danger-400 focus-visible:outline-danger-600";
      case "success":
        return "bg-success-500 hover:bg-success-400 focus-visible:outline-success-600";
      default:
        return "bg-dark hover:bg-slate-400 focus-visible:outline-slate-600";
    }
  }

  function setButtonTextColor(color: string) {
    switch (color) {
      case "dark":
        return "text-dark";
      case "light":
        return "text-white";
      default:
        return "text-gray-500"
    }
  }

  return (
    <button
      id={props.id}
      onClick={props.onClick}
      name={props.name}
      disabled={props.isDisabled}
      className={`${setButtonType(
        props.variant || "dark"
      )} ${setButtonTextColor(props.labelColor || "white")} ${props.className
        } px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:bg-gray-300 disabled:text-gray-500`}
    >
      {props.label && props.label}
    </button>
  );
};
