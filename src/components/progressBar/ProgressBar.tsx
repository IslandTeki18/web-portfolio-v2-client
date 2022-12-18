import * as React from "react";

type ProgressBarProps = {
  className?: string;
  progressBarClassName?: string;
  progressValue?: number;
  wrapperStyles?: object;
  id?: string;
};

export const ProgressBar = (props: ProgressBarProps) => {
  const styles = {
    width: `${props.progressValue}%`,
  };
  const wrapperStyles = props.wrapperStyles;
  return (
    <div
      className={`dkProgressBar progress ${props.className && props.className}`}
      style={wrapperStyles}
      id={props.id}
    >
      <div
        className={`progress-bar ${props.progressBarClassName}`}
        role="progressbar"
        style={styles}
        aria-valuenow={props.progressValue}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
};

ProgressBar.defaultProps = {
  progressValue: 50,
  progressBarClassName: "",
  className: "",
  id: "default-id",
};
ProgressBar.propTypes = {};
