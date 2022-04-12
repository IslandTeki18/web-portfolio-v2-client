import React from "react";
import "./Header.scss";
import Icon from "../icon/Icon";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className="dkHeader navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <Icon className="fa-solid fa-fire-flame-curved" size={60} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            {userInfo && userInfo.isAdmin && (
              <>
                <li className="nav-item dropdown">
                  <button
                    className="btn btn-link nav-link dropdown-toggle"
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Admin
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink className="dropdown-item" to="/admin/viewprojects">
                      View Projects
                    </NavLink>
                    <NavLink className="dropdown-item" to="/admin/viewcontacts">
                      View Contacts
                    </NavLink>
                    <NavLink className="dropdown-item" to="/admin/settings">
                      Settings
                    </NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink
                      className="dropdown-item"
                      to="/"
                      onClick={logoutHandler}
                    >
                      Logout
                    </NavLink>
                  </div>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resume">
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
