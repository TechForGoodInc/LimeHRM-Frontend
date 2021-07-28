import * as React from "react";
import {
  PlasmicSelectBoxPrimary,
  DefaultSelectBoxPrimaryProps
} from "./plasmic/lime_hrm_front/PlasmicSelectBoxPrimary";
import { SelectRef } from "@plasmicapp/react-web";
import Option from "./SelectBoxPrimary__Option";
import OptionGroup from "./SelectBoxPrimary__OptionGroup";

interface SelectBoxPrimaryProps extends DefaultSelectBoxPrimaryProps {}

function SelectBoxPrimary_(props: SelectBoxPrimaryProps, ref: SelectRef) {
  const { plasmicProps, state } = PlasmicSelectBoxPrimary.useBehavior(
    props,
    ref
  );
  return <PlasmicSelectBoxPrimary {...plasmicProps} />;
}

const SelectBoxPrimary = React.forwardRef(SelectBoxPrimary_);

export default Object.assign(SelectBoxPrimary, {
  Option,
  OptionGroup,
  __plumeType: "select"
});
