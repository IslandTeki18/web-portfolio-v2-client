import React from "react";
import "./Footer.scss";
import Icon from "../icon/Icon";
import { socialMediaData } from "../../../utils/tempData";
import {Link} from "react-router-dom"

const Footer = () => {
  function socialMediaButtons() {
    return socialMediaData.map((social) => (
      <a
        href={social.link}
        rel="noreferrer noopener"
        key={social.icon}
        target="_blank"
      >
        <Icon className={social.icon} color="#ffffff" />
      </a>
    ));
  }
  return (
    <footer className="dkFooter bg-dark">
      <section id="socialMediaSection" className="container-fluid py-4">
        <div className="row align-items-center">
          <div className="col-12 col-sm-6 text-light text-sm-start text-center">
            <h5>Get connected with me on social media:</h5>
          </div>
          <div className="col-12 col-sm-6">
            <div className="socialMediaWrapper text-white">
              {socialMediaButtons()}
            </div>
          </div>
        </div>
      </section>
      <section id="linkSections" className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <h6 className="text-uppercase fw-bold">Landon McKell</h6>
              <hr className="hrStyles mb-3 mt-0 d-inline-block mx-auto" />
              <p>
                Thanks for visiting my portfolio. This is the second
                iteration of this portfolio and I'm constantly trying to
                improve. If you see an bug or an error please reach out to me.
                Thank you!
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <h6 className="text-uppercase fw-bold">Pages</h6>
              <hr className="hrStyles mb-3 mt-0 d-inline-block mx-auto" />
              <div className="pageLinks">
                <Link to="/">Home</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <h6 className="text-uppercase fw-bold">Useful Links</h6>
              <hr className="hrStyles mb-3 mt-0 d-inline-block mx-auto" />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="hrStyles mb-3 mt-0 d-inline-block mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
