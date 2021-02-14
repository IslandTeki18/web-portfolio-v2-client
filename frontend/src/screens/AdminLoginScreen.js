import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const AdminLoginScreen = ({ location, history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false)

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    // redirect if logged in
    if (userInfo) history.push(redirect);

    // show the message, after 5 seconds remove the message
    if (error) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [userInfo, history, redirect, error]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <h4>Admin Login</h4>
            </div>
            <div className="card-body">
              {error && <Message variant="danger" show={show}>{error}</Message>}
              {loading && <Loader />}
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label htmlFor="adminUsernameInput">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="adminUsernameInput"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="adminPasswordInput">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="adminPasswordInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginScreen;
