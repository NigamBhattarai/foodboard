import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import "./auth.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import OutsideHeader from "../outside/fragments/OutsideHeader";
import { AppContext } from "../../App";
import UseTitle from "../../hooks/useTitle";

function SignIn() {

  UseTitle("Sign In");

  const appContext = useContext(AppContext);

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const bindText = (e) => {
    if (e.target === document.getElementById("username")) {
      setLoginDetails({
        username: e.target.value,
        password: loginDetails.password,
      });
    } else if (e.target === document.getElementById("password")) {
      setLoginDetails({
        password: e.target.value,
        username: loginDetails.username,
      });
    }
  };

  function submitLoginForm(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/login", {
        username: loginDetails.username,
        password: loginDetails.password,
      })
      .then((res) => {
        appContext.dispatch({
          type: "removeLoginError",
        });
        appContext.dispatch({
          type: "login",
          value: { accessToken: res.data.accessToken, user: res.data.user },
        });
      })
      .catch((err, data) => {
        var status = err.toJSON().status;
        var errorField, errorText;
        if (status === 400) {
          errorField = "username";
          errorText = "Username does not exist";
        } else if (status === 406) {
          errorField = "password";
          errorText = "Incorrect password";
        }
        appContext.dispatch({
          type: "loginError",
          value: { errorField, errorText },
        });
      });
  }

  var errorInput = { border: "1px solid #d44" };

  function isUsernameError() {
    return (
      appContext.state.loginError.isError &&
      appContext.state.loginError.errorField === "username"
    );
  }

  function isPasswordError() {
    return (
      appContext.state.loginError.isError &&
      appContext.state.loginError.errorField === "password"
    );
  }

  return (
    <div className="auth-wrapper">
      <OutsideHeader />
      <div className="auth-inner mt-5">
        <Form
          onSubmit={(e) => {
            submitLoginForm(e);
          }}
        >
          <h3>Sign In</h3>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={loginDetails.username}
              onChange={(e) => bindText(e)}
              id="username"
              type="text"
              className="form-control"
              style={isUsernameError() ? errorInput : {}}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={loginDetails.password}
              onChange={(e) => bindText(e)}
              id="password"
              type="password"
              className="form-control"
              style={isPasswordError() ? errorInput : {}}
              placeholder="Enter password"
            />
          </Form.Group>
          <Form.Group>
            <div className="custom-control custom-checkbox">
              <Form.Check
                type="checkbox"
                className="custom-control-Form.Control"
                id="customCheck1"
              />
              <Form.Label
                className="custom-control-Form.Label"
                htmlFor="customCheck1"
              >
                Remember me
              </Form.Label>
            </div>
          </Form.Group>
          <center style={{ color: "#d44" }} className="my-2">
            {appContext.state.loginError.isError
              ? appContext.state.loginError.errorText
              : ""}
          </center>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <Link to="#">password?</Link>
          </p>
          <p className="forgot-password text-left">
            New User <Link to={`/signup`}>Register</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
export default SignIn;
