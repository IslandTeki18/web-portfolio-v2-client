import React from "react";
import "./Header.scss";
import Icon from "../../atoms/icon/Icon";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/user.actions";

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

  function handleMenuClose() {
    let navbar = document.getElementById("navbar-content");
    let navToggler = document.getElementById("navbar-toggler");
    navbar.classList.remove("show");
    navToggler.classList.add("collapsed");
  }

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className={`dkHeader navbar fixed-top navbar-expand-md navbar-dark`}>
      <div className={`container`}>
        <Link className="navbar-brand" to="/">
          <Icon
            className="fa-solid fa-fire-flame-curved"
            size={50}
            color={"#ffc700"}
          />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          id="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-content"
          aria-controls="navbar-content"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon className="fa-solid fa-bars" size={35} color={"#ffffff"} />
        </button>

        <div className="collapse navbar-collapse" id="navbar-content">
          <ul className="navbar-nav me-auto">
            {userInfo && userInfo.isAdmin && (
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
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink
                    className="dropdown-item"
                    to="/admin/viewprojects"
                    onClick={() => handleMenuClose()}
                  >
                    View Projects
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/admin/viewcontacts"
                    onClick={() => handleMenuClose()}
                  >
                    View Contacts
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/admin/settings"
                    onClick={() => handleMenuClose()}
                  >
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
            )}
          </ul>
          <ul className="navbar-nav ms-auto align-items-center align-items-md-end">
            <li className="nav-item">
              <NavLink
                className="nav-link menu-item"
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={() => handleMenuClose()}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link menu-item"
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={() => handleMenuClose()}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link menu-item"
                to="/projects"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={() => handleMenuClose()}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link menu-item"
                to="/resume"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={() => handleMenuClose()}
              >
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link menu-item"
                to="/contact"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={() => handleMenuClose()}
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
