import React from "react";
import PropTypes from "prop-types";
import Img from "../img/Img";

const Card = (props) => {
  return (
    <div className={`dkCard card`}>
      {props.imgTop && (
        <Img
          className={`card-img-top ${props.imageClassName}`}
          src={props.imgSrc}
          alt={props.imageAlt}
          height={300}
        />
      )}
      {props.children}
    </div>
  );
};

Card.propTypes = {
  imgTop: PropTypes.bool,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imageClassName: PropTypes.string,
};

export default Card;
