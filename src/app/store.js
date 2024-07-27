import { configureStore } from "@reduxjs/toolkit";
import rentReducer from '../features/rentSlice'


export const store = configureStore({
    reducer: {
        rentBike: rentReducer,
    }
})

export default store