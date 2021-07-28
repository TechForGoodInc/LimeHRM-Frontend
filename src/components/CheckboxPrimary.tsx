import * as React from "react";
import {
  PlasmicCheckboxPrimary,
  DefaultCheckboxPrimaryProps
} from "./plasmic/lime_hrm_front/PlasmicCheckboxPrimary";
import { CheckboxRef } from "@plasmicapp/react-web";

interface CheckboxPrimaryProps extends DefaultCheckboxPrimaryProps {}

function CheckboxPrimary_(props: CheckboxPrimaryProps, ref: CheckboxRef) {
  const { plasmicProps, state } =
    PlasmicCheckboxPrimary.useBehavior<CheckboxPrimaryProps>(props, ref);
  return <PlasmicCheckboxPrimary {...plasmicProps} />;
}

const CheckboxPrimary = React.forwardRef(CheckboxPrimary_);

export default Object.assign(CheckboxPrimary, {
  __plumeType: "checkbox"
});
