// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vQU939GjUi82K5u1iSBKF3
// Component: sE8WQB1xWR
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_lime_hrm_front.module.css"; // plasmic-import: vQU939GjUi82K5u1iSBKF3/projectcss
import * as sty from "./PlasmicDashboard.module.css"; // plasmic-import: sE8WQB1xWR/css

export type PlasmicDashboard__VariantMembers = {};

export type PlasmicDashboard__VariantsArgs = {};
type VariantPropType = keyof PlasmicDashboard__VariantsArgs;
export const PlasmicDashboard__VariantProps = new Array<VariantPropType>();

export type PlasmicDashboard__ArgsType = {};
type ArgPropType = keyof PlasmicDashboard__ArgsType;
export const PlasmicDashboard__ArgProps = new Array<ArgPropType>();

export type PlasmicDashboard__OverridesType = {
  root?: p.Flex<"div">;
  sidebar?: p.Flex<typeof Sidebar>;
  primaryDiv?: p.Flex<"div">;
  pageContent?: p.Flex<"div">;
  timeLeaveTiles?: p.Flex<"div">;
  timeTile?: p.Flex<"div">;
  clockButtons?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  leaveTile?: p.Flex<"div">;
  payPerformanceTiles?: p.Flex<"div">;
  payTile?: p.Flex<"div">;
  performanceTile?: p.Flex<"div">;
};

export interface DefaultDashboardProps {
  className?: string;
}

function PlasmicDashboard__RenderFunc(props: {
  variants: PlasmicDashboard__VariantsArgs;
  args: PlasmicDashboard__ArgsType;
  overrides: PlasmicDashboard__OverridesType;
  dataFetches?: PlasmicDashboard__Fetches;
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
            <div
              data-plasmic-name={"pageContent"}
              data-plasmic-override={overrides.pageContent}
              className={classNames(defaultcss.all, sty.pageContent)}
            >
              <div
                data-plasmic-name={"timeLeaveTiles"}
                data-plasmic-override={overrides.timeLeaveTiles}
                className={classNames(defaultcss.all, sty.timeLeaveTiles)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"timeTile"}
                  data-plasmic-override={overrides.timeTile}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.timeTile)}
                >
                  <h1
                    className={classNames(
                      defaultcss.h1,
                      defaultcss.__wab_text,
                      sty.h1__l8PZ
                    )}
                  >
                    {"Time"}
                  </h1>

                  <h1
                    className={classNames(
                      defaultcss.h1,
                      defaultcss.__wab_text,
                      sty.h1___1SP1U
                    )}
                  >
                    {"5:30 PM"}
                  </h1>

                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"clockButtons"}
                    data-plasmic-override={overrides.clockButtons}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.clockButtons)}
                  >
                    <ButtonPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.buttonPrimary__zDwiO
                      )}
                      prop={"Clock In"}
                    />

                    <ButtonPrimary
                      className={classNames(
                        "__wab_instance",
                        sty.buttonPrimary__qacnZ
                      )}
                      prop={"Clock Out"}
                    />
                  </p.Stack>

                  <div
                    data-plasmic-name={"freeBox"}
                    data-plasmic-override={overrides.freeBox}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox
                    )}
                  >
                    {"Last Action: Clocked out at 5:00 pm"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"leaveTile"}
                  data-plasmic-override={overrides.leaveTile}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.leaveTile)}
                >
                  <h1
                    className={classNames(
                      defaultcss.h1,
                      defaultcss.__wab_text,
                      sty.h1__vD0Dq
                    )}
                  >
                    {"Leave"}
                  </h1>
                </p.Stack>
              </div>

              <div
                data-plasmic-name={"payPerformanceTiles"}
                data-plasmic-override={overrides.payPerformanceTiles}
                className={classNames(defaultcss.all, sty.payPerformanceTiles)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"payTile"}
                  data-plasmic-override={overrides.payTile}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.payTile)}
                >
                  <h1
                    className={classNames(
                      defaultcss.h1,
                      defaultcss.__wab_text,
                      sty.h1__pyoHy
                    )}
                  >
                    {"Pay"}
                  </h1>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"performanceTile"}
                  data-plasmic-override={overrides.performanceTile}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.performanceTile)}
                >
                  <h1
                    className={classNames(
                      defaultcss.h1,
                      defaultcss.__wab_text,
                      sty.h1__lFMuc
                    )}
                  >
                    {"Performance"}
                  </h1>
                </p.Stack>
              </div>
            </div>
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
    "pageContent",
    "timeLeaveTiles",
    "timeTile",
    "clockButtons",
    "freeBox",
    "leaveTile",
    "payPerformanceTiles",
    "payTile",
    "performanceTile"
  ],
  sidebar: ["sidebar"],
  primaryDiv: [
    "primaryDiv",
    "pageContent",
    "timeLeaveTiles",
    "timeTile",
    "clockButtons",
    "freeBox",
    "leaveTile",
    "payPerformanceTiles",
    "payTile",
    "performanceTile"
  ],
  pageContent: [
    "pageContent",
    "timeLeaveTiles",
    "timeTile",
    "clockButtons",
    "freeBox",
    "leaveTile",
    "payPerformanceTiles",
    "payTile",
    "performanceTile"
  ],
  timeLeaveTiles: [
    "timeLeaveTiles",
    "timeTile",
    "clockButtons",
    "freeBox",
    "leaveTile"
  ],
  timeTile: ["timeTile", "clockButtons", "freeBox"],
  clockButtons: ["clockButtons"],
  freeBox: ["freeBox"],
  leaveTile: ["leaveTile"],
  payPerformanceTiles: ["payPerformanceTiles", "payTile", "performanceTile"],
  payTile: ["payTile"],
  performanceTile: ["performanceTile"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  sidebar: typeof Sidebar;
  primaryDiv: "div";
  pageContent: "div";
  timeLeaveTiles: "div";
  timeTile: "div";
  clockButtons: "div";
  freeBox: "div";
  leaveTile: "div";
  payPerformanceTiles: "div";
  payTile: "div";
  performanceTile: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDashboard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDashboard__VariantsArgs;
    args?: PlasmicDashboard__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicDashboard__Fetches;
  } & Omit<PlasmicDashboard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDashboard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicDashboard__ArgProps,
      internalVariantPropNames: PlasmicDashboard__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicDashboard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDashboard";
  } else {
    func.displayName = `PlasmicDashboard.${nodeName}`;
  }
  return func;
}

export const PlasmicDashboard = Object.assign(
  // Top-level PlasmicDashboard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sidebar: makeNodeComponent("sidebar"),
    primaryDiv: makeNodeComponent("primaryDiv"),
    pageContent: makeNodeComponent("pageContent"),
    timeLeaveTiles: makeNodeComponent("timeLeaveTiles"),
    timeTile: makeNodeComponent("timeTile"),
    clockButtons: makeNodeComponent("clockButtons"),
    freeBox: makeNodeComponent("freeBox"),
    leaveTile: makeNodeComponent("leaveTile"),
    payPerformanceTiles: makeNodeComponent("payPerformanceTiles"),
    payTile: makeNodeComponent("payTile"),
    performanceTile: makeNodeComponent("performanceTile"),

    // Metadata about props expected for PlasmicDashboard
    internalVariantProps: PlasmicDashboard__VariantProps,
    internalArgProps: PlasmicDashboard__ArgProps
  }
);

export default PlasmicDashboard;
/* prettier-ignore-end */
