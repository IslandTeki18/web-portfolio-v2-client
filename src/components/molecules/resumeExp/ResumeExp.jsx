import React from "react";
import "./ResumeExp.scss";
import PropTypes from "prop-types";

const ResumeExp = (props) => {
  function renderExperienceListItems() {
    if (!props.expListItems) return;
    return props.expListItems.map((item, idx) => {
      return <li key={idx}>{item}</li>;
    });
  }
  return (
    <div className={`dkResumeExp ${props.className}`}>
      <h4>{props.employer}</h4>
      <h5 className="text-white">
        {props.startMonth} {props.startYear} -{" "}
        {props.isPresent ? "Present" : `${props.endMonth} ${props.endYear}`}
      </h5>
      <p>
        <em>
          {props.city}, {props.state}
        </em>
      </p>
      <ul>{renderExperienceListItems()}</ul>
    </div>
  );
};

ResumeExp.defaultProps = {
  className: "",
  isPresent: false,
};

ResumeExp.propTypes = {
  employer: PropTypes.string,
  className: PropTypes.string,
  startMonth: PropTypes.string,
  startYear: PropTypes.string,
  endMonth: PropTypes.string,
  endYear: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  isPresent: PropTypes.bool,
  expListItems: PropTypes.array,
};

export default ResumeExp;
