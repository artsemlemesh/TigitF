import { configureStore } from "@reduxjs/toolkit";
import rentReducer from "../features/rentSlice";
import postReducer from "../features/postSlice"
import tabReducer from "../features/FAQslice"
import bikeReducer from "../features/availableBikesSlice"
import commentReducer from "../features/commentSlice"
import tourReducer from "../features/tourSlice"
import authReducer from "../features/authSlice"



export const store = configureStore({
  reducer: {
    rentBike: rentReducer,
    posts: postReducer,
    tabs: tabReducer,
    bikes: bikeReducer,
    comments: commentReducer,
    tours: tourReducer,
    auth: authReducer
  },
});

export default store;
