import React from "react";
import "./LabelInput.scss";
import PropTypes from "prop-types";
import Input from "../../atoms/input/Input";

const LabelInput = (props) => {
  return (
    <div className={`dkLabelInput ${props.className} has-validation`}>
      <label
        htmlFor={props.htmlFor}
        className={`form-label ${props.labelClassName}`}
      >
        {props.label}
      </label>
      <Input
        {...props}
        className={props.inputClassName}
        id={props.htmlFor}
        value={props.value}
        onChange={props.onChange}
        required={props.isRequired}
      />
    </div>
  );
};
LabelInput.defaultProps = {
  className: "",
  labelClassName: "",
  inputClassName: "",
  label: "Placeholder Label",
};

LabelInput.propTypes = {
  htmlFor: PropTypes.string,
  labelClassName: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  isRequired: PropTypes.bool,
};

export default LabelInput;
