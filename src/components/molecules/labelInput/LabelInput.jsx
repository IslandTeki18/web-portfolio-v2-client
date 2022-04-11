import React from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/input/Input";

const LabelInput = (props) => {
  return (
    <div className={`dkLabelInput input-group ${props.labelInputClassName}`}>
      <label htmlFor={props.htmlFor} className={props.labelClassName}></label>
      <Input {...props} id={props.htmlFor} />
    </div>
  );
};
LabelInput.defaultProps = {
  labelInputClassName: "",
};

LabelInput.propTypes = {
  htmlFor: PropTypes.string,
  labelClassName: PropTypes.string,
  labelInputClassName: PropTypes.string,
};

export default LabelInput;
