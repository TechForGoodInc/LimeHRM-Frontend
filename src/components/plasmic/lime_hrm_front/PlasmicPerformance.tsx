// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vQU939GjUi82K5u1iSBKF3
// Component: QnldjWBrCI
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
import Sidebar from "../../Sidebar"; // plasmic-import: yoRVhunlI-d/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: puPU6pgA-z/component
import RecruitmentTable from "../../RecruitmentTable"; // plasmic-import: 06awOUIVXL/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_lime_hrm_front.module.css"; // plasmic-import: vQU939GjUi82K5u1iSBKF3/projectcss
import * as sty from "./PlasmicPerformance.module.css"; // plasmic-import: QnldjWBrCI/css

import imagePpxYh2F3H from "./images/image.png"; // plasmic-import: ppxYH2f3h/picture

export type PlasmicPerformance__VariantMembers = {};

export type PlasmicPerformance__VariantsArgs = {};
type VariantPropType = keyof PlasmicPerformance__VariantsArgs;
export const PlasmicPerformance__VariantProps = new Array<VariantPropType>();

export type PlasmicPerformance__ArgsType = {};
type ArgPropType = keyof PlasmicPerformance__ArgsType;
export const PlasmicPerformance__ArgProps = new Array<ArgPropType>();

export type PlasmicPerformance__OverridesType = {
  root?: p.Flex<"div">;
  sidebar?: p.Flex<typeof Sidebar>;
  primaryDiv?: p.Flex<"div">;
  buttonDiv?: p.Flex<"div">;
  statistics?: p.Flex<"div">;
  statistics2?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  img?: p.Flex<"img">;
  recruitmentTable?: p.Flex<typeof RecruitmentTable>;
  data?: p.Flex<"div">;
};

export interface DefaultPerformanceProps {
  className?: string;
}

function PlasmicPerformance__RenderFunc(props: {
  variants: PlasmicPerformance__VariantsArgs;
  args: PlasmicPerformance__ArgsType;
  overrides: PlasmicPerformance__OverridesType;
  dataFetches?: PlasmicPerformance__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      {}
      {}

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <Sidebar
            data-plasmic-name={"sidebar"}
            data-plasmic-override={overrides.sidebar}
            className={classNames("__wab_instance", sty.sidebar)}
          />

          <div
            data-plasmic-name={"primaryDiv"}
            data-plasmic-override={overrides.primaryDiv}
            className={classNames(defaultcss.all, sty.primaryDiv)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"buttonDiv"}
              data-plasmic-override={overrides.buttonDiv}
              hasGap={true}
              className={classNames(defaultcss.all, sty.buttonDiv)}
            >
              <ButtonPrimary
                className={classNames(
                  "__wab_instance",
                  sty.buttonPrimary__iROs
                )}
              />

              <ButtonPrimary
                className={classNames(
                  "__wab_instance",
                  sty.buttonPrimary__d7Ygy
                )}
              />

              <ButtonPrimary
                className={classNames(
                  "__wab_instance",
                  sty.buttonPrimary__pc98
                )}
              />
            </p.Stack>

            <div
              data-plasmic-name={"statistics"}
              data-plasmic-override={overrides.statistics}
              className={classNames(defaultcss.all, sty.statistics)}
            >
              <div
                data-plasmic-name={"statistics2"}
                data-plasmic-override={overrides.statistics2}
                className={classNames(defaultcss.all, sty.statistics2)}
              >
                <div
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox
                  )}
                >
                  {"Review Status Statistics "}
                </div>

                <img
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(defaultcss.img, sty.img)}
                  role={"img"}
                  src={imagePpxYh2F3H}
                />
              </div>

              <RecruitmentTable
                data-plasmic-name={"recruitmentTable"}
                data-plasmic-override={overrides.recruitmentTable}
                className={classNames("__wab_instance", sty.recruitmentTable)}
              />
            </div>

            <div
              data-plasmic-name={"data"}
              data-plasmic-override={overrides.data}
              className={classNames(defaultcss.all, sty.data)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "sidebar",
    "primaryDiv",
    "buttonDiv",
    "statistics",
    "statistics2",
    "freeBox",
    "img",
    "recruitmentTable",
    "data"
  ],
  sidebar: ["sidebar"],
  primaryDiv: [
    "primaryDiv",
    "buttonDiv",
    "statistics",
    "statistics2",
    "freeBox",
    "img",
    "recruitmentTable",
    "data"
  ],
  buttonDiv: ["buttonDiv"],
  statistics: [
    "statistics",
    "statistics2",
    "freeBox",
    "img",
    "recruitmentTable"
  ],
  statistics2: ["statistics2", "freeBox", "img"],
  freeBox: ["freeBox"],
  img: ["img"],
  recruitmentTable: ["recruitmentTable"],
  data: ["data"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  sidebar: typeof Sidebar;
  primaryDiv: "div";
  buttonDiv: "div";
  statistics: "div";
  statistics2: "div";
  freeBox: "div";
  img: "img";
  recruitmentTable: typeof RecruitmentTable;
  data: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPerformance__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPerformance__VariantsArgs;
    args?: PlasmicPerformance__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPerformance__Fetches;
  } & Omit<PlasmicPerformance__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPerformance__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPerformance__ArgProps,
      internalVariantPropNames: PlasmicPerformance__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPerformance__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPerformance";
  } else {
    func.displayName = `PlasmicPerformance.${nodeName}`;
  }
  return func;
}

export const PlasmicPerformance = Object.assign(
  // Top-level PlasmicPerformance renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sidebar: makeNodeComponent("sidebar"),
    primaryDiv: makeNodeComponent("primaryDiv"),
    buttonDiv: makeNodeComponent("buttonDiv"),
    statistics: makeNodeComponent("statistics"),
    statistics2: makeNodeComponent("statistics2"),
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    recruitmentTable: makeNodeComponent("recruitmentTable"),
    data: makeNodeComponent("data"),

    // Metadata about props expected for PlasmicPerformance
    internalVariantProps: PlasmicPerformance__VariantProps,
    internalArgProps: PlasmicPerformance__ArgProps
  }
);

export default PlasmicPerformance;
/* prettier-ignore-end */
