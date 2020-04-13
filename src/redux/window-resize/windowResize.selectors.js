import { createSelector } from "reselect";

const selectScreen = (state) => state.screen;

export const selectScreenSize = createSelector(
  [selectScreen],
  (screen) => screen
);
