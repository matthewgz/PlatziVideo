import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import gravatar from "../utils/gravatar";
import "../assets/styles/components/Header.scss";
import { connect } from "react-redux";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import { logoutRequest } from "../actions";

const Header = ({ user, logoutRequest, location }) => {
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    logoutRequest();
  };

  return (
    <header
      className={
        location.pathname === "/login" || location.pathname === "/register"
          ? "header header__login-register"
          : "header"
      }
    >
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}

          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">{user.name}</a>
            </li>
          ) : null}

          {hasUser ? (
            <li>
              <a to="#logout" onClick={handleLogout}>
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
