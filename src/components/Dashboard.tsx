// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicDashboard,
  DefaultDashboardProps
} from "./plasmic/lime_hrm_front/PlasmicDashboard";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface DashboardProps extends Omit<DefaultDashboardProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultDashboardProps altogether and have
// total control over the props for your component.
interface DashboardProps extends DefaultDashboardProps {}

function Dashboard_(props: DashboardProps, ref: HTMLElementRefOf<"div">) {
  var time = new Date();
  return (
    <PlasmicDashboard 
    root={{ ref }} 
    {...props} 
    currentTime={{
      className: "currentTime",
      children: time.getHours() + ":" + time.getMinutes()
    }}
    />
  );
}
const Dashboard = React.forwardRef(Dashboard_);
export default Dashboard;
