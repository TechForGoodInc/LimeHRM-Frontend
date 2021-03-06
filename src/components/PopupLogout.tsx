// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicPopupLogout,
  DefaultPopupLogoutProps
} from "./plasmic/lime_hrm_front/PlasmicPopupLogout";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import './PopupLogout.css';
import { handleLogoutCancel, handleLogout } from "./../App"

interface PopupLogoutProps extends DefaultPopupLogoutProps {
  trigger: boolean
}

function PopupLogout_(props: PopupLogoutProps, ref: HTMLElementRefOf<"div">) {
  return (props.trigger) ? (
    <PlasmicPopupLogout
      className="popout-logout" 
      popupLogout={{ ref }}
      continueButton={{
        className: "continueButton",
        onClick: () => handleLogoutCancel()
      }}
      logoutButton={{
        className: "logoutButton",
        onClick: () => handleLogout()
      }}
    />
  ) : <div/>;
}

const PopupLogout = React.forwardRef(PopupLogout_);
export default PopupLogout;
