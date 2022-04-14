import "./ServiceSection.scss";
import Card from "../../atoms/card/Card";
import Icon from "../../atoms/icon/Icon";
import { servicesData } from "../../../utils/tempData";
import useWindowWidthResize from "../../../customHooks/useWindowWidthResize";

const ServiceSection = () => {
  const {isMobile} = useWindowWidthResize()

  function renderServiceCards() {
    return servicesData.map((service) => (
      <div
        className="col-sm-12 col-md-6 col-lg-4 card-wrapper"
        key={service.title}
      >
        <Card cardClassName="service-card">
          <div className="icon-wrapper">
            <Icon className={service.icon} size={50} color="#ffffff" />
          </div>
          <div className="description-wrapper text-white">
            <div className="separator" />
            <p className="service-title-label">{service.title}</p>
            <p className="service-description">{service.description}</p>
          </div>
        </Card>
      </div>
    ));
  }
  return (
    <section
      className={`dkServiceSection waves-spacer ${
        isMobile ? "stacked-steps-mobile" : "stacked-steps-desktop"
      }`}
    >
      <div className="container">
        <div className="col-12 pb-5">
          <p className="service-title color-whiteMain">Services</p>
        </div>
        <div className="row row-spacing pb-5">{renderServiceCards()}</div>
      </div>
    </section>
  );
};

export default ServiceSection;
