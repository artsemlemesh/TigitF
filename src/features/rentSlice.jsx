import { createSlice } from "@reduxjs/toolkit";






const initialState = {
    rentedBikes: [],
    status: 'idle',
    error: null,
}

const rentBikeSlice = createSlice({
    name: 'rentBike',
    initialState,
    reducers: {
        //sync action, adds bikes locally
        rentBikeAdded: (state, action) => {
            state.rentedBikes.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(rentBike.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(rentBike.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.rentedBikes.push(action.payload);
        })
        .addCase(rentBike.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload

        })
    }

})

export const { rentBikeAdded } = rentBikeSlice.actions
export default rentBikeSlice.reducer