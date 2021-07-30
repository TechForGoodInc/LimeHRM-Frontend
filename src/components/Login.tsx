import * as React from "react";
import {
  PlasmicLogin,
  DefaultLoginProps
} from "./plasmic/lime_hrm_front/PlasmicLogin";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { setToken, getToken, getLoginToken } from "./../App";
import { UrlRoutes, navigate } from "./../Router";

var loginUsername = "";
var loginPassword = "";

interface LoginProps extends DefaultLoginProps {}

function Login_(props: LoginProps, ref: HTMLElementRefOf<"div">) {
  return (
    <PlasmicLogin 
      root={{ ref }} 
      {...props} 
      loginButton={{
        className: "loginButton",
        onClick: () => handleLogin(loginUsername, loginPassword)
      }}
      emailInput={{
        className: "emailInput",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handleEmailChange(e)
      }}
      passwordInput={{
        className: "passwordInput",
        onChange: (e: React.FormEvent<HTMLInputElement>) => handlePasswordChange(e)
      }}
    />
  );
}

const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
  loginUsername = e.currentTarget.value;
}

const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
  loginPassword = e.currentTarget.value;
}

const handleLogin = (username: string, password: string) => {
  errorCheckBoxes()
  getLoginToken(username, password).then(
    result => {
      setToken(result.token);
      if (getToken() != undefined) navigate(UrlRoutes.Dashboard);
      else {alert("Connection to server could not be established.")}
    }
  );
}

const errorCheckBoxes = () => {
  if (loginUsername === "") alert("Please enter an email address");
  if (loginPassword === "") alert("Please enter a password");
}

const Login = React.forwardRef(Login_);
export default Login;
