import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
    getContactDetails,
    updateContact,
    deleteContact,
} from "../../redux/actions/contact.actions";
import { CONTACT_UPDATE_RESET } from "../../redux/constants/contactConstants";

const AdminContactDetailsPage = () => {
    const navigate = useNavigate();
    const slug = useParams();
    const dispatch = useDispatch();
    const [haveRead, setHaveRead] = useState(false);
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
            navigate("/admin/viewcontacts");
        } else {
            if (!contact || contact._id !== slug.id) {
                dispatch(getContactDetails(slug.id));
            } else {
                setHaveRead(contact.haveRead);
            }
        }
    }, [dispatch, successUpdate, contact, slug, error, errorUpdate, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateContact({ _id: slug.id, haveRead }));
    };

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this message?")) {
            dispatch(deleteContact(id));
            navigate("/admin/viewcontacts");
        }
    };

    return (
        <div className="dkAdminContactDetailsPage">
            <Link className="btn btn-light m-3" to="/admin/viewcontacts">
                Go Back
            </Link>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 my-4 text-white">
                        <h2 className="text-white">Contact Details</h2>
                        {loadingUpdate && <Loader />}
                        {errorUpdate && (
                            <Message variant="danger" isDismissible>
                                {errorUpdate}
                            </Message>
                        )}
                        {loading ? (
                            <Loader />
                        ) : error ? (
                            <Message variant="danger" isDismissible>
                                {error}
                            </Message>
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
                                                onChange={(e) =>
                                                    setHaveRead(
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                            <label
                                                className="form-check-label mb-3"
                                                htmlFor="haveReadCheck"
                                            >
                                                Yes, I have read the contact
                                                information.
                                            </label>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                deleteHandler(contact._id)
                                            }
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
        </div>
    );
};

export default AdminContactDetailsPage;
