import "./ContactMePage.scss";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/atoms/message/Message";
import { createContact } from "../../actions/contactActions";
import ContactForm from "../../components/organisms/contactForm/ContactForm";
import Icon from "../../components/atoms/icon/Icon";
import TitleSection from "../../components/sectionTemplates/titleSection/TitleSection";

const ContactMePage = () => {
  const dispatch = useDispatch();

  const contactCreate = useSelector((state) => state.contactCreate);
  const { error, success } = contactCreate;

  return (
    <div className="dkContactMePage">
      <section id="contactTitleSection">
        <TitleSection
          className="text-white"
          titleBegin="CONTACT"
          titleEnd="ME"
          titleFont="display-2 pt-3"
          color="#FFB52E"
        />
      </section>
      <section id="contactInformationSection">
        <div className="container py-md-5 py-sm-3">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 order-1 order-md-0">
              <div className="d-flex justify-content-start align-items-center text-white">
                <Icon className="fas fa-phone-square me-3" size={40} />
                <div className="contactDescription">
                  <h6 className="text-uppercase fw-light">Call Me</h6>
                  <p className="fs-5">
                    <em>Call/Text</em>: 801-310-5876
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center text-white mt-3">
                <Icon className="fas fa-envelope-square me-3" size={40} />
                <div className="contactDescription">
                  <h6 className="text-uppercase fw-light">
                    Shoot me an email!
                  </h6>
                  <a
                    className="fs-5 text-decoration-none text-white"
                    href="mailto:landon.roney7923@gmail.com?subject=From Portfolio"
                  >
                    landon.roney7923@gmail.com
                  </a>
                </div>
              </div>
              <div className="socialMediaIcons mt-4">
                <a
                  href="https://github.com/ETM32019"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Icon
                    className="fab fa-github-square"
                    size={30}
                    color="#FFB52E"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/landon-mckell/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Icon className="fab fa-linkedin" size={30} color="#FFB52E" />
                </a>
                <a
                  href="https://www.instagram.com/landon.mckell/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Icon
                    className="fab fa-instagram"
                    size={30}
                    color="#FFB52E"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12 order-0 order-md-1 mb-3 mb-md-0">
              {error && <Message variant="danger">{error}</Message>}
              {success && <Message variant="success">Message Sent!</Message>}
              <ContactForm
                formCallback={(form) => {
                  dispatch(
                    createContact(
                      form.name,
                      form.phone,
                      form.email,
                      form.message
                    )
                  );
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMePage;
