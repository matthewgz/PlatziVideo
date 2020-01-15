import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/components/Register.scss";
import { registerRequest } from "../actions";

const Register = ({ registerRequest, history }) => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: ""
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    registerRequest(form);
    history.push("/");
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            required
            name="name"
            className="input"
            type="text"
            placeholder="Nombre"
            onChange={handleInput}
            value={form.name}
          />
          <input
            required
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
            value={form.email}
          />
          <input
            required
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
            value={form.password}
          />
          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest
};

export default connect(null, mapDispatchToProps)(Register);
