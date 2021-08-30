import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { v4 as uuid } from "uuid";
const reviewsSlice = createSlice({
  name: "reviews",
  initialState: { entities: [] },
  reducers: {
    reviewAdded(state, action) {
      state.entities.push({
        ...action.payload,
        id: uuid(),
      });
    },
    reviewRemoved(state, action) {
      const index = state.entities.findIndex(
        (rev) => rev.id === action.payload
      );
      state.entities.splice(index, 1);
    },
  },
});
export const { reviewAdded, reviewRemoved } = reviewsSlice.actions;
export default reviewsSlice.reducer;
