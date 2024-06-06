import React, { useState } from "react";

const SignInForm = () => {
  const [state, setState] = useState({
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
    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);
    setState({ email: "", password: "" });
  };

  return (
    <div className="form-container-login sign-in-container-login">
      <form onSubmit={handleOnSubmit} className="form-login">
        <h1>Sign in</h1>
        <div className="social-container-login">
          <a href="#" className="social-login"><i className="fab fa-facebook-f" /></a>
          <a href="#" className="social-login"><i className="fab fa-google-plus-g" /></a>
          <a href="#" className="social-login"><i className="fab fa-linkedin-in" /></a>
        </div>
        <span className="span-login">or use your account</span>
        <input
          className="input-login"
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          className="input-login"
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#" className="a-login">Forgot your password?</a>
        <button className="submit-button-login">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
