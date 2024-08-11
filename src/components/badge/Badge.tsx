import * as React from "react";

type BadgeProps = {
  variant: string;
  className: string;
  children: React.ReactElement;
};

export const Badge = (props: BadgeProps) => {
  return (
    <span className={`${props.className}`}>
      {props.children}
    </span>
  );
};
