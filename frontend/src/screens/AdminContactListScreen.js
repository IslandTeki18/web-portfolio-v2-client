import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listContacts, deleteContact } from "../actions/contactActions";
import { useDispatch, useSelector } from "react-redux";

const AdminContactListScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const contactList = useSelector((state) => state.contactList);
  const { loading, error, contacts } = contactList;

  const contactDelete = useSelector((state) => state.contactDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = contactDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listContacts());
    } else {
      history.push("/admin/login");
    }

    // show the message, after 5 seconds remove the message
    if (error || errorDelete || successDelete) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [dispatch, userInfo, history, successDelete, error, errorDelete]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 my-4">
          <div className="col">
            <h3>Contact List</h3>
          </div>
          {loadingDelete && <Loader />}
          {errorDelete && <Message variant="danger" show={show}>{errorDelete}</Message>}
          {successDelete && (
            <Message
              variant="success"
              show={show}
            >{`Contact Information Deleted`}</Message>
          )}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger" show={show}>
              {error}
            </Message>
          ) : (
            <div className="table-responsive">
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PHONE</th>
                    <th>EMAIL</th>
                    <th className="text-center">HAVE READ?</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact._id}>
                      <td>{contact._id.substring(18)}</td>
                      <td>{contact.name}</td>
                      <td>{contact.phone}</td>
                      <td>{contact.email}</td>
                      <td className="text-center">
                        {contact.haveRead === true ? (
                          <i
                            className="fas fa-check"
                            style={{ color: "green" }}
                          ></i>
                        ) : (
                          <i
                            className="fas fa-times"
                            style={{ color: "red" }}
                          ></i>
                        )}
                      </td>
                      <td>
                        <Link to={`/admin/contact/${contact._id}/details`}>
                          <button className="btn btn-link">
                            <i
                              className="fas fa-eye"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-link"
                          onClick={() => deleteHandler(contact._id)}
                        >
                          <i
                            className="fas fa-trash"
                            style={{ fontSize: "20px", color: "red" }}
                          ></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminContactListScreen;
