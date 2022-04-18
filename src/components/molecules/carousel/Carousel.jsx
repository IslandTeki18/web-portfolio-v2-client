import React, { useState } from "react";
import "./Carousel.scss";
import PropTypes from "prop-types";
import Img from "../../atoms/img/Img";

const Carousel = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  function nextSlide() {
    setSlideIndex((prevState) => prevState + 1);
  }
  function prevSlide() {
    setSlideIndex((prevState) => prevState - 1);
  }
  function renderImages() {
    if (!props.images) return;
    if (slideIndex > props.images.length - 1) {
      setSlideIndex(0);
    }
    if (slideIndex < 0) {
      setSlideIndex(props.images.length);
    }
    return props.images.map((image, idx) => (
      <div
        className={`carousel-item ${slideIndex === idx ? "active" : ""}`}
        key={idx}
      >
        <Img
          src={image}
          className="d-block w-100 carousel-img"
          alt="placeholder"
          width={600}
          height={400}
        />
      </div>
    ));
  }
  return (
    <div className={`dkCarousel ${props.className}`}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">{renderImages()}</div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={() => prevSlide()}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={() => nextSlide()}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  className: "",
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default Carousel;
