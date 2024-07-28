import { configureStore } from "@reduxjs/toolkit";
import rentReducer from "../features/rentSlice";
import postReducer from "../pages/PrepForRiding/components/postSlice"


export const store = configureStore({
  reducer: {
    rentBike: rentReducer,
    posts: postReducer,
  },
});

export default store;
