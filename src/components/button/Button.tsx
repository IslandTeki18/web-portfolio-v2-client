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
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      id={props.id}
      onClick={props.onClick}
      name={props.name}
      disabled={props.isDisabled}
      className={`bg-${props.buttonType} text-${props.labelColor}`}
    >
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  buttonType: "dark",
  labelColor: "white",
  isDisabled: false,
};
