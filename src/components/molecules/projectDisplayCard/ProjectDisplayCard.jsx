import React from "react";
import "./ProjectDisplayCard.scss";
import PropTypes from "prop-types";
import Card from "../../atoms/card/Card";
import image from "../../../assets/images/underconstructionimage.jpg";
const ProjectDisplayCard = (props) => {
  return (
    <div className={`dkProjectDisplayCard`}>
      <Card
        cardClassName="project-display-card"
        imageClassName="project-image"
        imageWrapperClassName="image-wrapper"
        imgTop
        imgSrc={
          props.project.images && props.project.images.length !== 0
            ? props.project.images[0]
            : image
        }
        imgAlt={props.project.name}
        imgLink={`/project/${props.project._id}`}
      >
        {props.cardTitle && (
          <div className="card-body cardDescription bg-blackMain">
            <div className="project-title color-whiteMain">
              {props.project.title}
            </div>
            <div className="type-label color-primaryMain">
              {props.project.type}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

ProjectDisplayCard.defaultProps = {
  cardTitle: true,
};
ProjectDisplayCard.propTypes = {
  project: PropTypes.object.isRequired,
  cardTitle: PropTypes.bool,
};

export default ProjectDisplayCard;
