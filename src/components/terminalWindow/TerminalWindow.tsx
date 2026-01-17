import * as React from "react";

type TerminalWindowProps = {
  title?: string;
  showChrome?: boolean;
  glowColor?: "green" | "purple" | "blue";
  children: React.ReactNode;
  className?: string;
};

export const TerminalWindow = (props: TerminalWindowProps) => {
  const getGlowClass = () => {
    if (!props.glowColor) return "";

    switch (props.glowColor) {
      case "green":
        return "shadow-glow-green";
      case "purple":
        return "shadow-glow-purple";
      case "blue":
        return "shadow-glow-blue";
      default:
        return "";
    }
  };

  return (
    <div
      className={`
        bg-base-100
        border border-base-content
        rounded-box
        overflow-hidden
        ${getGlowClass()}
        ${props.className || ""}
      `}
    >
      {props.showChrome && (
        <div className="bg-base-200 border-b border-base-content px-4 py-2 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <div className="w-3 h-3 rounded-full bg-success"></div>
          </div>
          {props.title && (
            <span className="text-base-content text-sm font-mono ml-4">
              {props.title}
            </span>
          )}
        </div>
      )}
      <div className="p-4">{props.children}</div>
    </div>
  );
};
