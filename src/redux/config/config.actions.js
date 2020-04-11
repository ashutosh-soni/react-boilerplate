import { ConfigActionTypes } from "./config.types";

export const setConfig = (config) => ({
  type: ConfigActionTypes.SET_CONFIG,
  payload: config,
});
