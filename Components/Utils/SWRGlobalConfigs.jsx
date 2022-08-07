import React from "react";
import { SWRConfig } from "swr";
import { useDispatch } from "react-redux";
import { getIllustrationsDispatcher } from "../../middlewares/swrMiddleware";

// this components only sets up the swr global configs
export default function SWRGlobalConfigs({ children }) {
  const dispatch = useDispatch();
  // change this object to effect global configs
  const value = {
    use: [getIllustrationsDispatcher(dispatch)],
    errorRetryCount: 3,
  };
  return <SWRConfig value={value}>{children}</SWRConfig>;
}
