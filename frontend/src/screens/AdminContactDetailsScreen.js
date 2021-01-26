import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useSelector, useDispatch } from "react-redux";
import {
  getContactDetails,
  updateContact,
  deleteContact,
} from "../actions/contactActions";
import { CONTACT_UPDATE_RESET } from "../constants/contactConstants";

const AdminContactDetailsScreen = ({ match, history }) => {
  const contactId = match.params.id;

  const [haveRead, setHaveRead] = useState(false);

  const dispatch = useDispatch();

  const contactDetails = useSelector((state) => state.contactDetails);
  const { loading, error, contact } = contactDetails;

  const contactUpdate = useSelector((state) => state.contactUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = contactUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: CONTACT_UPDATE_RESET });
      history.push("/admin/viewcontacts");
    } else {
      if (!contact.name || contact._id !== contactId) {
        dispatch(getContactDetails(contactId));
      } else {
        setHaveRead(contact.haveRead);
      }
    }
  }, [dispatch, history, successUpdate, contact, contactId]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateContact({ _id: contactId, haveRead }));
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      dispatch(deleteContact(id));
      history.push("/admin/viewcontacts");
    }
  };

  return (
    <>
      <Link className="btn btn-light m-3" to="/admin/viewcontacts">
        Go Back
      </Link>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 my-4">
            <h2>Contact Details</h2>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
            {loading ? (
              <Loader />
            ) : error ? (
              <Message>{error}</Message>
            ) : (
              <>
                <hr />
                <p>
                  <em>Name: </em>
                  {contact.name}
                </p>
                <p>
                  <em>Phone:</em>
                  <br />
                  {contact.phone}
                </p>
                <p>
                  <em>Email: </em>
                  {contact.email}
                </p>
                <p>
                  <em>Message:</em>
                  <br />
                  {contact.message}
                </p>
                <hr />
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <label htmlFor="havereadSelection">
                      Confirm Read Message?
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={haveRead}
                        id="haveReadCheck"
                        onChange={(e) => setHaveRead(e.target.checked)}
                      />
                      <label
                        className="form-check-label mb-3"
                        htmlFor="haveReadCheck"
                      >
                        Yes, I have read the contact information.
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                    <button
                      className="btn btn-link"
                      onClick={() => deleteHandler(contact._id)}
                    >
                      Delete
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminContactDetailsScreen;
