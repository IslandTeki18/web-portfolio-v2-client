import React from "react";
import PropTypes from "prop-types";

const ResumeEdu = (props) => {
  return (
    <div className={`dkResumeEdu ${props.className}`}>
      <h4>{props.educationProgram}</h4>
      <h5 className="text-white">
        {props.startYear} - {props.endYear}
      </h5>
      <p>
        <em>
          {props.schoolName}, {props.city}, {props.state}
        </em>
      </p>
      <p>{props.description}</p>
    </div>
  );
};

ResumeEdu.defaultProps = {
  className: "",
};
ResumeEdu.propTypes = {
  className: PropTypes.string,
  educationProgram: PropTypes.string,
  startYear: PropTypes.string,
  endYear: PropTypes.string,
  schoolName: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  description: PropTypes.string,
};

export default ResumeEdu;
