import React, { useState } from 'react';
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";


const LoginPage = () => {
  const [type, setType] = useState("signIn");
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };
  const containerClass = "container-login " + (type === "signUp" ? "right-panel-active-login" : "");

  return (
    <div className="App-login">
      <div className={containerClass} id="container-login">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container-login">
          <div className="overlay-login">
            <div className="overlay-panel-login overlay-left-login">
              <h1 className='h1-login'>Hello, Friend!</h1>
              <p>
                
                Enter your personal details and start journey with us
              </p>
              <button
                className="ghost-button-login"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel-login overlay-right-login">
              <h1 className='h1-login'>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button
                className="ghost-button-login"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
