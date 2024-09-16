
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  tours: [],
  status: "idle",
  error: null,
};

export const fetchTours = createAsyncThunk("tours/fetchTours", async () => {
    
    const response = await fetch(
      `http://127.0.0.1:8000/tours/`
    )
    const data = await response.json()
    return data
    
  
});


const toursSlice = createSlice({
    name: 'tours',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchTours.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchTours.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.tours = action.payload
        })
        .addCase(fetchTours.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})



export default toursSlice.reducer

