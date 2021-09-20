import { createSelector } from "reselect";

const selectAllPets = (state) => state.user.data;

export const selectUserName = createSelector(
  selectAllPets,
  (item) => item.firstName && item.firstName
);
