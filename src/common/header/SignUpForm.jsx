import React, { useState } from "react";

const SignUpForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const { name, email, password } = state;
    alert(`You are sign up with name: ${name}, email: ${email}, and password: ${password}`);
    setState({ name: "", email: "", password: "" });
  };

  return (
    <div className="form-container-login sign-up-container-login">
      <form onSubmit={handleOnSubmit}className="form-login">
        <h1>Create Account</h1>
        <div className="social-container-login">
          <a href="#" className="social-login"><i className="fab fa-facebook-f" /></a>
          <a href="#" className="social-login"><i className="fab fa-google-plus-g" /></a>
          <a href="#" className="social-login"><i className="fab fa-linkedin-in" /></a>
        </div>
        <span className="span-login">or use your email for registration</span>
        <input
          className="input-login"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="input-login"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="input-login"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="submit-button-login">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
