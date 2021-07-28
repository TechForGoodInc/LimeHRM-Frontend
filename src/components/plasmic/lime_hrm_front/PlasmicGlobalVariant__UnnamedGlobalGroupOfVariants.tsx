// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import * as p from "@plasmicapp/react-web";
export type UnnamedGlobalGroupOfVariantsValue = "unnamedVariant";
export const UnnamedGlobalGroupOfVariantsContext = React.createContext<
  UnnamedGlobalGroupOfVariantsValue | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);

export function useUnnamedGlobalGroupOfVariants() {
  return React.useContext(UnnamedGlobalGroupOfVariantsContext);
}

export default UnnamedGlobalGroupOfVariantsContext;
/* prettier-ignore-end */
