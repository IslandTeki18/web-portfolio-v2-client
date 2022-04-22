import React from "react";
import "./ContactHeaderSection.scss";
import PropTypes from "prop-types";

const ContactHeaderSection = (props) => {
  return (
    <section
      className={`dkContactHeaderSection ${props.className} bg-whiteMain`}
    >
      <div className="container header-spacing">
        <div className="row">
          <div className="col-12 text-center">
            <div className="subtitle-label text-uppercase">
              I would love to talk to you
            </div>
            <div className="title-label">How I Can Help</div>
            <div className="title-description">
              Trying to work the internet alone can be a tiring and often times
              confusing process, that's where I come in. I wanna make the web
              development process quick and as pain free as possible at an
              affordable price. Whether thats working with on an existing
              project or building something from scratch.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactHeaderSection.defaultProps = {
  className: "",
};
ContactHeaderSection.propTypes = {
  className: PropTypes.string,
};

export default ContactHeaderSection;
