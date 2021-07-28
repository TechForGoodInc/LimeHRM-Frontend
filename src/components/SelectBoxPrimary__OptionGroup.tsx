import * as React from "react";
import {
  PlasmicSelectBoxPrimary__OptionGroup,
  DefaultSelectBoxPrimary__OptionGroupProps
} from "./plasmic/lime_hrm_front/PlasmicSelectBoxPrimary__OptionGroup";

interface SelectBoxPrimary__OptionGroupProps
  extends DefaultSelectBoxPrimary__OptionGroupProps {}

function SelectBoxPrimary__OptionGroup(
  props: SelectBoxPrimary__OptionGroupProps
) {
  const { plasmicProps } =
    PlasmicSelectBoxPrimary__OptionGroup.useBehavior(props);
  return <PlasmicSelectBoxPrimary__OptionGroup {...plasmicProps} />;
}

export default Object.assign(SelectBoxPrimary__OptionGroup, {
  __plumeType: "select-option-group"
});
