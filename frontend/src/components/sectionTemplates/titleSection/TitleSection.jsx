import React from "react";
import "./TitleSection.scss";
import PropTypes from "prop-types";

const TitleSection = (props) => {
  const styles = {
    color: props.color,
  };
  return (
    <div className={`dkTitleSection ${props.className}`}>
      <p className={props.titleFont}>
        {props.titleBegin}
        <span className="ms-4" style={styles}>
          {props.titleEnd}
        </span>
      </p>
    </div>
  );
};

TitleSection.defaultProps = {
  className: "",
  titleBegin: "title starts",
  titleEnd: "title ends",
  titleFont: "fs-4",
};
TitleSection.propTypes = {
  titleFont: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  titleBegin: PropTypes.string,
  titleEnd: PropTypes.string,
};

export default TitleSection;
