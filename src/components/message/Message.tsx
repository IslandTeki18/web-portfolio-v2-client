import * as React from "react";

type MessageProps = {
  variant?: string;
  isDismissible?: boolean;
  children: React.ReactElement;
};

export const Message = (props: MessageProps) => {
  return (
    <div
      className={`alert ${props.variant ? `alert-${props.variant}` : ""} ${
        props.isDismissible && " alert-warning alert-dismissible fade show"
      }`}
    >
      {props.children}
    </div>
  );
};

Message.defaultProps = {
  variant: "info",
  isDismissible: false,
};
