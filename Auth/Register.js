import React from "react";
import useForm from "./useForm";
import {Link} from 'react-router-dom'
import "bulma/css/bulma.css";
import "./Registration.css";

const Registration = () => {
  const { values, errors, handleChange, handleSubmit } = useForm();

  return (
    <div className="form_section">
      <form onSubmit={handleSubmit} noValidate>
      <p style={{textAlign:"center",color:'lightskyblue',fontSize:'20px',fontWeight:'600',marginBottom:'30px'}}>Signup to your account</p>
        <div className="field">
          <label className="label">Username</label>
          <input
            autoComplete="off"
            className={`input ${errors.username && "is-danger"}`}
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
            required
          />
          {errors.username && (
            <p className="help is-danger">{errors.username}</p>
          )}
        </div>

        <div className="field">
          <label className="label">Email Address</label>
          <input
            autoComplete="off"
            className={`input ${errors.email && "is-danger"}`}
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            required
          />
          {errors.email && <p className="help is-danger">{errors.email}</p>}
        </div>

        <div className="field">
          <label className="label">Password</label>
          <input
            className={`input ${errors.password && "is-danger"}`}
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password || ""}
            required
          />
          {errors.password && (
            <p className="help is-danger">{errors.password}</p>
          )}
        </div>

        <div className="field">
          <label className="label">Confirm Password</label>

          <input
            className={`input ${errors.password2 && "is-danger"}`}
            type="password"
            name="password2"
            onChange={handleChange}
            value={values.password2 || ""}
            required
          />

          {errors.password2 && (
            <p className="help is-danger">{errors.password2}</p>
          )}
        </div>
        <button className="form_btn">Register</button>
        <p className='alreadyacc'>
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
