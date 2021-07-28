import * as React from "react";
import {
  PlasmicLogin,
  DefaultLoginProps
} from "./plasmic/lime_hrm_front/PlasmicLogin";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { setToken, getToken, getLoginToken } from "./../App";
import { UrlRoutes, navigate } from "./../Router";
import { waitFor } from "@testing-library/react";

interface LoginProps extends DefaultLoginProps {}

function Login_(props: LoginProps, ref: HTMLElementRefOf<"div">) {
  return (
    <PlasmicLogin 
      root={{ ref }} 
      {...props} 
      loginButton={{
        className: "loginDiv",
        onClick: () => handleLogin("email@casiano.dev", "password") //replace with values from textboxes on login page
      }}
      emailInput={{
        className: "emailInput",
        onChange: () => handleEmailChange()
      }}
      passwordInput={{
        className: "passwordInput",
        onChange: () => handlePasswordChange()
      }}
    />
  );
}

const handleEmailChange = () => {

}

const handlePasswordChange = () => {

}

const handleLogin = (username: string, password: string) => {
  getLoginToken(username, password).then(
    result => {
      setToken(result.token);
      if (getToken() != undefined){
        alert(getToken());
        navigate(UrlRoutes.Dashboard);
      }
      else {alert("Connection to server could not be established.")}
    }
  );
}

const Login = React.forwardRef(Login_);
export default Login;
