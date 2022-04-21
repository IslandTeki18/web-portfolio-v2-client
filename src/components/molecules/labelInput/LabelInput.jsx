import React from "react";
import "./LabelInput.scss";
import PropTypes from "prop-types";
import Input from "../../atoms/input/Input";

const LabelInput = (props) => {
  return (
    <div className={`dkLabelInput ${props.className}`}>
      <label htmlFor={props.htmlFor} className={props.labelClassName}>
        {props.label}
      </label>
      <Input {...props} className={props.inputClassName} id={props.htmlFor} />
    </div>
  );
};
LabelInput.defaultProps = {
  className: "",
  labelClassName: "",
  inputClassName: "",
};

LabelInput.propTypes = {
  htmlFor: PropTypes.string,
  labelClassName: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default LabelInput;
