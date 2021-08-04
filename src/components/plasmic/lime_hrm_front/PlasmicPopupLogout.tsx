// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vQU939GjUi82K5u1iSBKF3
// Component: wzrzdQ0JQ7
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: puPU6pgA-z/component
import ButtonSecondary from "../../ButtonSecondary"; // plasmic-import: RpSPfHBhcc/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_lime_hrm_front.module.css"; // plasmic-import: vQU939GjUi82K5u1iSBKF3/projectcss
import * as sty from "./PlasmicPopupLogout.module.css"; // plasmic-import: wzrzdQ0JQ7/css

export type PlasmicPopupLogout__VariantMembers = {};

export type PlasmicPopupLogout__VariantsArgs = {};
type VariantPropType = keyof PlasmicPopupLogout__VariantsArgs;
export const PlasmicPopupLogout__VariantProps = new Array<VariantPropType>();

export type PlasmicPopupLogout__ArgsType = {};
type ArgPropType = keyof PlasmicPopupLogout__ArgsType;
export const PlasmicPopupLogout__ArgProps = new Array<ArgPropType>();

export type PlasmicPopupLogout__OverridesType = {
  popupLogout?: p.Flex<"div">;
  popupContainer?: p.Flex<"div">;
  text?: p.Flex<"div">;
  buttonDiv?: p.Flex<"div">;
  continueButton?: p.Flex<typeof ButtonPrimary>;
  logoutButton?: p.Flex<typeof ButtonSecondary>;
};

export interface DefaultPopupLogoutProps {
  className?: string;
}

function PlasmicPopupLogout__RenderFunc(props: {
  variants: PlasmicPopupLogout__VariantsArgs;
  args: PlasmicPopupLogout__ArgsType;
  overrides: PlasmicPopupLogout__OverridesType;
  dataFetches?: PlasmicPopupLogout__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"popupLogout"}
      data-plasmic-override={overrides.popupLogout}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.popupLogout,
        "" as const
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"popupContainer"}
        data-plasmic-override={overrides.popupContainer}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          sty.popupContainer,
          "PopupContainer" as const
        )}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text
          )}
        >
          {
            "You are being logged out soon, would you like to continue your session?"
          }
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"buttonDiv"}
          data-plasmic-override={overrides.buttonDiv}
          hasGap={true}
          className={classNames(defaultcss.all, sty.buttonDiv)}
        >
          <ButtonPrimary
            data-plasmic-name={"continueButton"}
            data-plasmic-override={overrides.continueButton}
            className={classNames("__wab_instance", sty.continueButton)}
            prop={"Continue"}
          />

          <ButtonSecondary
            data-plasmic-name={"logoutButton"}
            data-plasmic-override={overrides.logoutButton}
            className={classNames("__wab_instance", sty.logoutButton)}
            prop={"Logout"}
          />
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  popupLogout: [
    "popupLogout",
    "popupContainer",
    "text",
    "buttonDiv",
    "continueButton",
    "logoutButton"
  ],
  popupContainer: [
    "popupContainer",
    "text",
    "buttonDiv",
    "continueButton",
    "logoutButton"
  ],
  text: ["text"],
  buttonDiv: ["buttonDiv", "continueButton", "logoutButton"],
  continueButton: ["continueButton"],
  logoutButton: ["logoutButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  popupLogout: "div";
  popupContainer: "div";
  text: "div";
  buttonDiv: "div";
  continueButton: typeof ButtonPrimary;
  logoutButton: typeof ButtonSecondary;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPopupLogout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPopupLogout__VariantsArgs;
    args?: PlasmicPopupLogout__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPopupLogout__Fetches;
  } & Omit<PlasmicPopupLogout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPopupLogout__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPopupLogout__ArgProps,
      internalVariantPropNames: PlasmicPopupLogout__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPopupLogout__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "popupLogout") {
    func.displayName = "PlasmicPopupLogout";
  } else {
    func.displayName = `PlasmicPopupLogout.${nodeName}`;
  }
  return func;
}

export const PlasmicPopupLogout = Object.assign(
  // Top-level PlasmicPopupLogout renders the root element
  makeNodeComponent("popupLogout"),
  {
    // Helper components rendering sub-elements
    popupContainer: makeNodeComponent("popupContainer"),
    text: makeNodeComponent("text"),
    buttonDiv: makeNodeComponent("buttonDiv"),
    continueButton: makeNodeComponent("continueButton"),
    logoutButton: makeNodeComponent("logoutButton"),

    // Metadata about props expected for PlasmicPopupLogout
    internalVariantProps: PlasmicPopupLogout__VariantProps,
    internalArgProps: PlasmicPopupLogout__ArgProps
  }
);

export default PlasmicPopupLogout;
/* prettier-ignore-end */