import React from "react";
import "./SkillsSection.scss";
import PropTypes from "prop-types";
import LabelProgressBar from "../../molecules/labelProgressBar/LabelProgressBar";

const SkillsSection = (props) => {
  function renderProgressBars() {
    if (!props.skillsData) return;
    return props.skillsData.map((skill) => (
      <div className="col-12 col-md-6">
        <LabelProgressBar
          label={skill.title}
          progressValue={skill.progress}
          key={skill.title}
          progressBarClassName="skill-progress"
          labelClassName="skill-label color-whiteMain"
          className="skill-wrapper"
        />
      </div>
    ));
  }
  return (
    <div className="dkSkillsSection waves-spacer stacked-waves-2">
      <div className="container">
        <div className="col-12">
          <p className="skills-title color-whiteMain">My Skills</p>
        </div>
        <div className="row">{renderProgressBars()}</div>
      </div>
    </div>
  );
};

SkillsSection.propTypes = {
  skillsData: PropTypes.array,
};

export default SkillsSection;
