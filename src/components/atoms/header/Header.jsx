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
  const activeStyle = {
    color: "#fff",
    textDecorationLine: "underline",
    textDecorationColor: "#ffc700",
    textDecorationThickness: "3px",
    textUnderlineOffset: "4px",
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className={`dkHeader navbar fixed-top navbar-expand-md navbar-dark`}>
      <div className={`container`}>
        <Link className="navbar-brand" to="/">
          <Icon
            className="fa-solid fa-fire-flame-curved"
            size={60}
            color={"#ffc700"}
          />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon className="fa-solid fa-bars" size={35} color={"#ffffff"} />
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
              <NavLink
                className="nav-link menu-item"
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link menu-item"
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link menu-item"
                to="/projects"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link menu-item"
                to="/resume"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link menu-item"
                to="/contact"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
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
