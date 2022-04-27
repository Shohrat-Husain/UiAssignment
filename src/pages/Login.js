import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  return (
    <div>
      <div>
        <header>
          <img
            className="logo" src="https://www.techasoft.com/uploads/ekart_logo.png" alt="logo"></img>
        </header>
        <div className="mainContainer">
          <div className="formContainer">
            <div>
              <img src="https://aux.iconspalace.com/uploads/emails-icon-256.png" alt="email" className="email"/>
              <input type="text" placeholder="Email" className="input" />
            </div>
        <br/>
            <div className="second-input">
              <img src="https://icon-library.com/images/transparent-lock-icon/transparent-lock-icon-25.jpg" alt="pass" className="lock"/>
              <input type="password" placeholder="Password" className="input" />
            </div>
        <br/>
            <div>
              <button className="login-button" onClick={() => {
                  navigate("Home");
                }}>
                  Login
              </button>
            </div>
            <br />
            <a className="link" href="#">
              Forgot password ?
            </a>
            Or
            <a className="link" href="#">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
