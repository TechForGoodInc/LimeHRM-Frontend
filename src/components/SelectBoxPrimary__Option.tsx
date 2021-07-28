import * as React from "react";
import {
  PlasmicSelectBoxPrimary__Option,
  DefaultSelectBoxPrimary__OptionProps
} from "./plasmic/lime_hrm_front/PlasmicSelectBoxPrimary__Option";
import { SelectOptionRef } from "@plasmicapp/react-web";

interface SelectBoxPrimary__OptionProps
  extends DefaultSelectBoxPrimary__OptionProps {}

function SelectBoxPrimary__Option_(
  props: SelectBoxPrimary__OptionProps,
  ref: SelectOptionRef
) {
  const { plasmicProps } = PlasmicSelectBoxPrimary__Option.useBehavior(
    props,
    ref
  );
  return <PlasmicSelectBoxPrimary__Option {...plasmicProps} />;
}

const SelectBoxPrimary__Option = React.forwardRef(SelectBoxPrimary__Option_);

export default Object.assign(SelectBoxPrimary__Option, {
  __plumeType: "select-option"
});
