import React from "react";
import "./IconLink.scss";
import PropTypes from "prop-types";
import Icon from "../../atoms/icon/Icon";

const IconLink = (props) => {
  return (
    <div className={`dkIconLink ${props.className}`}>
      <Icon
        className={props.iconType}
        size={props.iconSize}
        color={props.iconColor}
      />
      <h5>
        <a className="btn" href={props.socialMediaLink}>
          {props.socialMediaType}
        </a>
      </h5>
    </div>
  );
};
IconLink.defaultProps = {
  className: "",
};
IconLink.propTypes = {
  className: PropTypes.string,
  iconType: PropTypes.string,
  iconSize: PropTypes.string || PropTypes.number,
  iconColor: PropTypes.string,
  socialMediaType: PropTypes.string,
  socialMediaLink: PropTypes.string,
};

export default IconLink;
