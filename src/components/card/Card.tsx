import * as React from "react";
import { Link } from "react-router-dom";
import {Img} from "../img/Img";

type CardProps = {
  cardClassName: string,
  imgTop?: boolean,
  imgSrc?: string,
  imgAlt?: string,
  imgLink?: string,
  imageClassName?: string,
  imageWrapperClassName?: string,
  imgWidth?: number,
  imgHeight?: number,
  children: React.ReactElement
}

export const Card = (props: CardProps) => {
  return (
    <div className={`dkCard card ${props.cardClassName}`}>
      {props.imgTop && (
        <Link to={props.imgLink || "/"}>
          <div className={props.imageWrapperClassName}>
            <Img
              className={`card-img-top ${props.imageClassName}`}
              src={props.imgSrc}
              alt={props.imgAlt}
              height={props.imgHeight}
              width={props.imgWidth}
            />
          </div>
        </Link>
      )}
      {props.children}
    </div>
  );
};

Card.defaultProps = {
  cardClassName: "",
  imageClassName: "",
  imageWrapperClassName: "",
  imgLink: "",
  imgWidth: 380,
  imgHeight: 213,
};
