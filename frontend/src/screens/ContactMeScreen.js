import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { createContact } from "../actions/contactActions";

const ContactMeScreen = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  // Set confirmation message to show user message has been sent
  const [confirmation, setConfirmation] = useState(null);

  const dispatch = useDispatch();

  const contactCreate = useSelector((state) => state.contactCreate);
  const { loading, error, success } = contactCreate;

  useEffect(() => {
    // show the message, after 5 seconds remove the message
    if (error || success) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [error, success]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createContact(name, phone, email, message));
    setConfirmation(
      "Contact Information Sent! I will reach out to you as soon as possible!"
    );
  };
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Contact Me</h4>
              {success && (
                <Message variant="success" show={show}>
                  {confirmation}
                </Message>
              )}
              {loading && <Loader />}
              {error && (
                <Message variant="danger" show={show}>
                  {error}
                </Message>
              )}
            </div>
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label htmlFor="nameTextInput">Name</label>
                  <input
                    type="name"
                    className="form-control"
                    placeholder="Enter name..."
                    id="nameTextInput"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneTextInput">Phone</label>
                  <input
                    type="phone"
                    className="form-control"
                    placeholder="Enter phone..."
                    id="phoneTextInput"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email..."
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactMeTextArea">Leave me a message:</label>
                  <textarea
                    className="form-control"
                    id="contactMeTextArea"
                    placeholder="Send me a message..."
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h4>Social Media</h4>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="d-flex justify-content-center">
                  <i
                    className="fab fa-instagram mr-3"
                    style={{ fontSize: "30px" }}
                  ></i>
                  <h5>
                    <a
                      className="btn"
                      href="https://www.instagram.com/landon.mckell/"
                    >
                      Instagram
                    </a>
                  </h5>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-center">
                  <i
                    className="fab fa-github-square mr-3"
                    style={{ fontSize: "30px" }}
                  ></i>
                  <h5>
                    <a className="btn" href="https://github.com/ETM32019">
                      Github
                    </a>
                  </h5>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-center">
                  <i
                    className="fab fa-linkedin mr-3"
                    style={{ fontSize: "30px" }}
                  ></i>
                  <h5>
                    <a
                      className="btn"
                      href="https://www.linkedin.com/in/landon-mckell/"
                    >
                      LinkedIn
                    </a>
                  </h5>
                </div>
              </li>
            </ul>
          </div>
          <div className="card mt-4">
            <div className="card-header text-center">
              <h4>Other Contact Methods</h4>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <h5>
                    <em>Call/Text</em>: 801-310-5876
                  </h5>
                  <i
                    className="fas fa-phone-square mr-3"
                    style={{ fontSize: "30px" }}
                  ></i>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <h5>
                    <em>Email:</em>{" "}
                    <a href="mailto:landon.roney7923@gmail.com?subject=From Portfolio">
                      landon.roney7923@gmail.com
                    </a>
                  </h5>
                  <i
                    className="fas fa-envelope-square mr-3"
                    style={{ fontSize: "30px" }}
                  ></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeScreen;
