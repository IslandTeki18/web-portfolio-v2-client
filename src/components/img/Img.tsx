import * as React from "react";
import "./Img.scss";

type ImgProps = {
  src?: any,
  alt?: string,
  className?: string,
  height?: number,
  width?: number,
}

export const Img = (props: ImgProps) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={`dkImg ${props.className}`}
      height={props.height}
      width={props.width}
      loading="lazy"
    />
  );
};

Img.defaultProps = {
  className: "",
};
