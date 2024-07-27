import { createSlice } from "@reduxjs/toolkit";






const initialState = {
    // fill here later
}





const rentBikeSlice = createSlice({
    name: 'rentBike',
    initialState,
    reducers: {
        rentBikeAdded: (state, action) => {
            state.rentBike.push(action.payload)
        }
    },

})


export default rentBikeSlice.reducer