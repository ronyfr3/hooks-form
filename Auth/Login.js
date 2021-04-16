import React from "react";
import useForm from "./useForm";
import {Link} from 'react-router-dom'
import "bulma/css/bulma.css";
import "./Registration.css";

const Login = () => {
  const { values, errors, handleChange, handleSubmit } = useForm();

  return (
    <div className="form_section">
      <form onSubmit={handleSubmit} noValidate>
      <p style={{textAlign:"center",color:'lightskyblue',fontSize:'20px',fontWeight:'600',marginBottom:'30px'}}>Login to your account</p>
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

      
        <button className="form_btn">Login</button>
        <p className='alreadyacc'>
          Don't have an account?
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
