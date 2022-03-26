import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/atoms/message/Message";
import Loader from "../../components/atoms/loader/Loader";
import { createContact } from "../../actions/contactActions";
import ContactForm from "../../components/organisms/contactForm/ContactForm";

const ContactMePage = () => {
  const dispatch = useDispatch();

  const contactCreate = useSelector((state) => state.contactCreate);
  const { loading, error, success } = contactCreate;

  return (
    <div className="dkContactMePage">
      <section id="contactInformationSection">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4">
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
            <div className="col-md-8">
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
