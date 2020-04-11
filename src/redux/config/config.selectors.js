import { createSelector } from "reselect";

const selectConfig = (state) => state.config;

export const selectActiveEnv = createSelector(
  [selectConfig],
  (config) => config.activeEnv
);

export const selectVersion = createSelector(
  [selectConfig],
  (config) => config.version
);
