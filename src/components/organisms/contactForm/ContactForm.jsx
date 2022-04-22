import { useState } from "react";
import "./ContactForm.scss";
import PropTypes from "prop-types";
import Form from "../../atoms/form/Form";
import Input from "../../atoms/input/Input";
import Icon from "../../atoms/icon/Icon";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const form = {
      name,
      phone,
      email,
      message,
    };
    props.formCallback(form);
    setEmail("");
    setMessage("");
    setName("");
    setPhone("");
  }
  return (
    <div className={`dkContactForm ${props.className}`}>
      <Form onSubmit={onSubmit}>
        <div className="d-flex justify-content-between mb-4 gap-3">
          <Input
            type="name"
            className="form-control"
            placeholder="Enter name..."
            id="nameTextInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="tel"
            className="form-control"
            placeholder="Enter phone..."
            id="phoneTextInput"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <Input
          type="email"
          className="form-control mb-4"
          placeholder="Enter email..."
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="form-control mb-4"
          id="contactMeTextArea"
          placeholder="Send me a message..."
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="send-button">
          Send
          <Icon
            className="fa-solid fa-arrow-right-long ms-2"
            size={24}
            color="#ffffff"
          />
        </button>
      </Form>
    </div>
  );
};

ContactForm.defaultProps = {
  className: "",
};

ContactForm.propTypes = {
  formCallback: PropTypes.func,
  className: PropTypes.string,
};

export default ContactForm;
