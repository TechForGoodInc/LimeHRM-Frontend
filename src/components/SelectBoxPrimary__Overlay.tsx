import * as React from "react";
import {
  PlasmicSelectBoxPrimary__Overlay,
  DefaultSelectBoxPrimary__OverlayProps
} from "./plasmic/lime_hrm_front/PlasmicSelectBoxPrimary__Overlay";
import { TriggeredOverlayRef } from "@plasmicapp/react-web";

interface SelectBoxPrimary__OverlayProps
  extends DefaultSelectBoxPrimary__OverlayProps {}

function SelectBoxPrimary__Overlay_(
  props: SelectBoxPrimary__OverlayProps,
  ref: TriggeredOverlayRef
) {
  const { plasmicProps } = PlasmicSelectBoxPrimary__Overlay.useBehavior(
    props,
    ref
  );
  return <PlasmicSelectBoxPrimary__Overlay {...plasmicProps} />;
}

const SelectBoxPrimary__Overlay = React.forwardRef(SelectBoxPrimary__Overlay_);

export default Object.assign(SelectBoxPrimary__Overlay, {
  __plumeType: "triggered-overlay"
});
