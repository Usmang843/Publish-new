import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onButtonClick = () => {
    // You'll update this function later...
  };

  return (
    <>
      <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
        <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
          <div className={"mainContainer"}>
            <div className={"titleContainer"}>
              <div>Login</div>
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                value={email}
                placeholder="Enter your email here"
                onChange={(ev) => setEmail(ev.target.value)}
                className={"inputBox"}
              />
              <label className="errorLabel">{emailError}</label>
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                value={password}
                placeholder="Enter your password here"
                onChange={(ev) => setPassword(ev.target.value)}
                className={"inputBox"}
              />
              <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
