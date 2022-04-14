import { Link } from "react-router-dom";
import "./WorkWithMeBanner.scss";

const WorkWithMeBanner = () => {
  return (
    <div className={`dkWorkWithMeBanner spacer layered-peaks-desktop`}>
      <div className="container h-100 content-wrapper py-5 py-md-3">
        <div className="col-12 pb-3 text-center">
          <p className="fs-3 fs-md-1 fw-600 color-blackMain">
            Interested in working with me?
          </p>
          <Link className="btn hire-button color-whiteMain" to="/contact">
            Let's talk!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkWithMeBanner;
