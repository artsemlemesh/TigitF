
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bikes: [],
  status: "idle",
  error: null,
};

export const fetchBikes = createAsyncThunk("bikes/fetchBikes", async () => {
    
    const response = await fetch(
      'http://127.0.0.1:8000/bikes/',
    )
    const data = await response.json()
    return data
  
});


const bikesSlice = createSlice({
    name: 'bikes',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchBikes.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchBikes.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.bikes = action.payload
        })
        .addCase(fetchBikes.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})



export default bikesSlice.reducer

