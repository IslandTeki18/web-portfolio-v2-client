import React from "react";
import "./LabelProgressBar.scss";
import PropTypes from "prop-types";
import ProgressBar from "../../atoms/progressBar/ProgressBar";

const LabelProgressBar = (props) => {
  return (
    <div className={`dkLabelProgressBar ${props.className}`}>
      <div className="w-100 d-flex justify-content-between align-items-center">
        <label className={props.labelClassName} htmlFor={props.id}>
          {props.label}
        </label>
        <label className={props.labelClassName} htmlFor={props.id}>{props.progressValue}%</label>
      </div>
      <ProgressBar
        progressValue={props.progressValue}
        id={props.id}
        progressBarClassName={props.progressBarClassName}
        wrapperStyles={props.progressWrapperStyles}
      />
    </div>
  );
};

LabelProgressBar.defaultProps = {
  labelClassName: "",
  className: "",
  id: "",
  label: "Sample Label",
};
LabelProgressBar.propTypes = {
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  progressValue: PropTypes.number,
  progressBarClassName: PropTypes.string,
  progressWrapperStyles: PropTypes.object,
};

export default LabelProgressBar;
