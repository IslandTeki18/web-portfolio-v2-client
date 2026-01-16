import * as React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
  type?: string;
  name?: string;
  variant?: "primary" | "secondary" | "accent" | "ghost" | "neutral" | "error" | "success" | "warning" | "info";
  size?: "xs" | "sm" | "md" | "lg";
  outline?: boolean;
  id?: string;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const variantClass = props.variant ? `btn-${props.variant}` : "";
  const sizeClass = props.size ? `btn-${props.size}` : "";
  const outlineClass = props.outline ? "btn-outline" : "";

  return (
    <button
      id={props.id}
      onClick={props.onClick}
      name={props.name}
      type={props.type as "button" | "submit" | "reset"}
      disabled={props.isDisabled}
      className={`btn ${variantClass} ${sizeClass} ${outlineClass} ${props.className || ""}`}
    >
      {props.label}
    </button>
  );
};
