import "./ContactMePage.scss";

import useScrollToTop from "../../customHooks/useScrollToTop";
import ContactHeaderSection from "../../components/sectionTemplates/contactHeaderSection/ContactHeaderSection";
import ServiceSection from "../../components/sectionTemplates/serviceSection/ServiceSection";
import ContactFormSection from "../../components/sectionTemplates/contactFormSection/ContactFormSection";

const ContactMePage = () => {
  useScrollToTop();
  
  return (
    <div className="dkContactMePage">
      <ContactHeaderSection />
      <div className="custom-spacer spacer-50-reverse" />
      <ServiceSection />
      <div className="custom-spacer contact-spacer-50" />
      <ContactFormSection />
    </div>
  );
};

export default ContactMePage;
