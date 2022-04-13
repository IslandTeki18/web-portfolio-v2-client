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
    <section className="dkSkillsSection waves-spacer stacked-waves-2 py-5">
      <div className="container">
        <div className="col-12 pb-5">
          <p className="skills-title color-whiteMain">My Skills</p>
        </div>
        <div className="row">{renderProgressBars()}</div>
        <div className="col-12 resume-button-wrapper pb-5">
          <button className="cv-button">Download CV</button>
        </div>
      </div>
    </section>
  );
};

SkillsSection.propTypes = {
  skillsData: PropTypes.array,
};

export default SkillsSection;
