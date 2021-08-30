import { configureStore } from "@reduxjs/toolkit";

import restaurantsReducer from "./features/restaurants/restaurantsSlice";
import reviewsSlice from "./features/reviews/reviewsSlice";

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    reviews: reviewsSlice,
  },
});

export default store;
