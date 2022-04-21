import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateUserProfile, getUserDetails } from "../../redux/actions/user.actions";
import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";

const AdminProfileSettingsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { success } = userUpdate;

  useEffect(() => {
    // if user is not logged in, kick out to login page
    if (!userInfo) {
      navigate("/");
    } else {
      if (!user || !user.username || success) {
        dispatch(getUserDetails("settings"));
      } else {
        setUsername(user.username);
      }
    }
  }, [userInfo, navigate, user, dispatch, success]);

  // password submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          username,
          password,
        })
      );
    }
  };

  return (
    <div className="dkAdminProfileSettingsPage">
      {/* User Settings Section */}
      <section className="py-3" id="user-settings-section">
        <div className="container">
          {/* Title */}
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="text-white">User Settings</h1>
            </div>
          </div>
          {/* User Current Info */}
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h5 className="text-white text-center">Current Settings</h5>
              <h6 className="text-white my-5">Username: {user.username}</h6>
            </div>
          </div>
          {/* User Settings Form */}
          <form onSubmit={submitHandler}>
            <div className="row mb-3">
              <div className="col-md-6 offset-md-3">
                {loading && <Loader />}
                {error && (
                  <Message variant="danger" isDismissible>
                    {error}
                  </Message>
                )}
                {message && <Message isDismissible>{message}</Message>}
                <h5 className="text-white text-center">
                  Change Username & Password
                </h5>
                <div className="form-group text-white">
                  <label htmlFor="InputUsername">New Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="InputUsername"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row text-white">
              <div className="col-md-6 offset-md-3">
                <div className="form-group mb-3">
                  <label htmlFor="InputPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="InputPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="InputConfirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="InputConfirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AdminProfileSettingsPage;
