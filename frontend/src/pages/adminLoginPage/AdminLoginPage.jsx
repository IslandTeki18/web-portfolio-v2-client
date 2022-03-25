import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";

const AdminLoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) navigate(`/`);
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };
  return (
    <div className="dkAdminLoginPage">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header text-center">
                <h4>Admin Login</h4>
              </div>
              <div className="card-body">
                {error && (
                  <Message variant="danger" isDismissible>
                    {error}
                  </Message>
                )}
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
    </div>
  );
};

export default AdminLoginPage;
