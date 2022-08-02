import "./ContactFormSection.scss";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../atoms/message/Message";
import { createContact } from "../../../redux/actions/contact.actions";
import ContactForm from "../../organisms/contactForm/ContactForm";
import { socialMediaData } from "../../../utils/tempData";
import Icon from "../../atoms/icon/Icon";

const ContactFormSection = (props) => {
  const dispatch = useDispatch();
  const contactCreate = useSelector((state) => state.contactCreate);
  const { error, success } = contactCreate;

  function renderSocialMediaIcons() {
    return socialMediaData.map((social, idx) => (
      <a href={social.link} target="_blank" rel="noreferrer noopener" key={idx}>
        <Icon className={social.icon} size={35} color="#000000" />
      </a>
    ));
  }

  return (
    <section className={`dkContactFormSection bg-primaryMain`}>
      <div className="container section-spacing">
        <div className="row">
          <div className="col-12 col-sm-6 order-1 order-sm-0">
            <div className="header-label color-blackMain pb-2">
              Let's get in touch!
            </div>
            <div className="header-desc color-blackMain mb-2">
              I enjoy building things and it’s what I’m good at. Please share as
              much info as possible so we can get the most out of our first meeting.
            </div>
            <div className="semi-label">Living In:</div>
            <p className="address-label mb-2">Spanish Fork, Utah, USA</p>
            <div className="semi-label">Call or Text:</div>
            <p className="address-label mb-5">801-310-5876</p>
            <div className="social-media-group">{renderSocialMediaIcons()}</div>
          </div>
          <div className="col-12 col-sm-6 order-0 order-sm-1 contact-form-col">
            <div className="header-label color-blackMain pb-4 text-center text-md-start">
              Let's talk about your project.
            </div>
            {error && <Message variant="danger">{error}</Message>}
            {success && <Message variant="success">Message Sent!</Message>}
            <ContactForm
              formCallback={(form) => {
                dispatch(
                  createContact(form.name, form.phone, form.email, form.message)
                );
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

ContactFormSection.propTypes = {};

export default ContactFormSection;
