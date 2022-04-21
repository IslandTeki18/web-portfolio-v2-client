import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";
import { listContacts, deleteContact } from "../../redux/actions/contact.actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AdminContactListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    if (!userInfo) navigate("/admin/login");
    dispatch(listContacts());
  }, [successDelete, error]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      dispatch(deleteContact(id));
    }
  };

  function renderTable() {
    if (!contacts) return
    return contacts.map((contact) => (
      <tr key={contact._id}>
        <td>{contact._id.substring(18)}</td>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
        <td className="text-center">
          {contact.haveRead === true ? (
            <i
              className="fas fa-check"
              style={{
                color: "green",
              }}
            ></i>
          ) : (
            <i className="fas fa-times" style={{ color: "red" }}></i>
          )}
        </td>
        <td>
          <Link to={`/admin/contact/${contact._id}/details`}>
            <button className="btn btn-link">
              <i
                className="fas fa-eye"
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
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
              style={{
                fontSize: "20px",
                color: "red",
              }}
            ></i>
          </button>
        </td>
      </tr>
    ));
  }

  if (loading || loadingDelete) return <Loader />;

  return (
    <div className="dkAdminContactListScreen">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 my-4">
            <div className="col">
              <h3 className="text-white">Contact List</h3>
            </div>
            {errorDelete && (
              <Message variant="danger" isDismissible>
                {errorDelete}
              </Message>
            )}
            {successDelete && (
              <Message
                variant="success"
                isDismissible
              >{`Contact Information Deleted`}</Message>
            )}
            {error && (
              <Message variant="danger" isDismissible>
                {error}
              </Message>
            )}
            <div className="table-responsive">
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PHONE</th>
                    <th>EMAIL</th>
                    <th className="text-center">HAVE READ?</th>
                    <th>view</th>
                    <th>remove</th>
                  </tr>
                </thead>
                <tbody>{renderTable()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContactListPage;
