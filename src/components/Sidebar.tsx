import * as React from "react";
import {
  PlasmicSidebar,
  DefaultSidebarProps
} from "./plasmic/lime_hrm_front/PlasmicSidebar";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { UrlRoutes, navigate } from "./../Router";
import { getUsername, deleteFromLocalStorage } from "./../App";

interface SidebarProps extends DefaultSidebarProps {}

function Sidebar_(props: SidebarProps, ref: HTMLElementRefOf<"div">) {
  return (
    <PlasmicSidebar 
      sidebarContainer={{ ref }} 
      {...props} 
      dashboardButton={{
        className: "dashboardButton",
        onClick: () => handleDashboardClick()
      }}
      myInfoButton={{
        className: "myInfoButton",
        onClick: () => handleMyInfoClick()
      }}
      timeButton={{
        className: "timeButton",
        onClick: () => handleTimeClick()
      }}
      leaveButton={{
        className: "leaveButton",
        onClick: () => handleLeaveClick()
      }}
      performanceButton={{
        className: "performanceButton",
        onClick: () => handlePerformanceClick()
      }}
      payButton={{
        className: "payButton",
        onClick: () => handlePayClick()
      }}
      recruitmentButton={{
        className: "recruitmentButton",
        onClick: () => handleRecruitmentClick()
      }}
      adminButton={{
        className: "adminButton",
        onClick: () => handleAdminClick()
      }}
      maintenanceButton={{
        className: "maintenanceButton",
        onClick: () => handleMaintenanceClick()
      }}
      logoutButton={{
        className: "logoutButton",
        onClick: () => handleLogoutClick()
      }}
      loggedInUser={{
        className: "loggedInUser",
        children: getUsername()
      }}
    />
  );
}

const handleDashboardClick = () => {
  navigate(UrlRoutes.Dashboard);
}
const handleMyInfoClick = () => {
  navigate(UrlRoutes.Account);
}
const handleTimeClick = () => {
  navigate(UrlRoutes.Time);
}
const handleLeaveClick = () => {
  navigate(UrlRoutes.Leave);
}
const handlePerformanceClick = () => {
  navigate(UrlRoutes.Performance);
}
const handlePayClick = () => {
  navigate(UrlRoutes.Pay);
}
const handleRecruitmentClick = () => {
  navigate(UrlRoutes.Recruitment);
}
const handleAdminClick = () => {
  navigate(UrlRoutes.Admin);
}
const handleMaintenanceClick = () => {
  navigate(UrlRoutes.Maintenance);
}
const handleLogoutClick = () => {
  deleteFromLocalStorage();
  navigate(UrlRoutes.Login);
}

const Sidebar = React.forwardRef(Sidebar_);
export default Sidebar;
