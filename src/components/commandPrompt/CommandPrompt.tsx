import * as React from "react";

type CommandPromptProps = {
  prompt?: "$" | ">" | ">>";
  status?: "ready" | "running" | "error";
  children?: React.ReactNode;
};

export const CommandPrompt = (props: CommandPromptProps) => {
  const getPromptSymbol = () => {
    return props.prompt || "$";
  };

  const getStatusColor = () => {
    switch (props.status) {
      case "ready":
        return "text-success";
      case "running":
        return "text-info";
      case "error":
        return "text-error";
      default:
        return "text-success";
    }
  };

  const getStatusIndicator = () => {
    if (!props.status) return null;

    switch (props.status) {
      case "ready":
        return "●";
      case "running":
        return "◐";
      case "error":
        return "✕";
      default:
        return null;
    }
  };

  return (
    <div className="flex items-start gap-2 font-mono">
      <span className={`${getStatusColor()} flex-shrink-0`} aria-hidden="true">
        {getStatusIndicator() && (
          <span className="mr-1">{getStatusIndicator()}</span>
        )}
        {getPromptSymbol()}
      </span>
      <span className="sr-only">Command prompt:</span>
      <div className="flex-1 text-base-content">{props.children}</div>
    </div>
  );
};
