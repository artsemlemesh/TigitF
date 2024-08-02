
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [],
  status: "idle",
  error: null,
};

export const fetchTabs = createAsyncThunk("tabs/fetchTabs", async () => {
    
    const response = await fetch(
      'http://127.0.0.1:8000/tabs/',
    )
    const data = await response.json()
    return data
  
});


const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchTabs.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchTabs.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.tabs = action.payload
        })
        .addCase(fetchTabs.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})



export default tabsSlice.reducer

