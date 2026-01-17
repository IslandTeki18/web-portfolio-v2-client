import * as React from "react";

type TerminalCardProps = {
  glow?: boolean;
  glowColor?: "green" | "purple" | "blue";
  children: React.ReactNode;
  className?: string;
};

export const TerminalCard = (props: TerminalCardProps) => {
  const getGlowClass = () => {
    if (!props.glow || !props.glowColor) return "";

    switch (props.glowColor) {
      case "green":
        return "shadow-glow-green hover:shadow-[0_0_15px_oklch(74%_0.18_142/0.6)]";
      case "purple":
        return "shadow-glow-purple hover:shadow-[0_0_15px_oklch(68%_0.22_295/0.6)]";
      case "blue":
        return "shadow-glow-blue hover:shadow-[0_0_15px_oklch(68%_0.15_230/0.6)]";
      default:
        return "";
    }
  };

  const getBorderColor = () => {
    if (!props.glowColor) return "border-base-content";

    switch (props.glowColor) {
      case "green":
        return "border-success";
      case "purple":
        return "border-primary";
      case "blue":
        return "border-info";
      default:
        return "border-base-content";
    }
  };

  return (
    <div
      className={`
        card
        bg-base-100
        border
        ${getBorderColor()}
        ${getGlowClass()}
        transition-shadow
        duration-300
        ${props.className || ""}
      `}
    >
      {props.children}
    </div>
  );
};
