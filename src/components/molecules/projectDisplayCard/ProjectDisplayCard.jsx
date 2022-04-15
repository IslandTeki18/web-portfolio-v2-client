import React from "react";
import "./ProjectDisplayCard.scss";
import PropTypes from "prop-types";
import Card from "../../atoms/card/Card";

const ProjectDisplayCard = (props) => {
  return (
    <div className={`dkProjectDisplayCard`}>
      <Card
        cardClassName="project-display-card img-fluid"
        imageClassName="project-image"
        imageWrapperClassName="image-wrapper"
        imgTop
        imgSrc={props.project.img}
        imgAlt={props.project.name}
        imgLink={`/project/${props.project._id}`}
      >
        {props.cardTitle && (
          <div className="card-body cardDescription bg-blackMain">
            <div className="project-title color-whiteMain">
              {props.project.title}
            </div>
            <div className="type-label color-primaryMain">Type</div>
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
