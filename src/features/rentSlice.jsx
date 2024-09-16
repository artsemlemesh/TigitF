import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async action to rent a bike
export const rentBike = createAsyncThunk(
  'rentBike/rentBike',
  async ({ bikeId, startTime, endTime }, { rejectWithValue }) => {
    try {
      console.log(`http://127.0.0.1:8000/book-bike/${bikeId}/`);

      // Correcting the axios.post() request
      const response = await axios.post(
        `http://127.0.0.1:8000/book-bike/${bikeId}/`,  // Ensure this matches your Django URL pattern
        {
          start_time: startTime,  // Pass the start and end time
          end_time: endTime,
        },
        {
          headers: {
            "Content-Type": "application/json",  // Use application/json for JSON data
          },
        }
      );
      
      console.log('RESPONSE:', response.data);  // Log the response
      return response.data;  // Return the response data
    } catch (err) {
      return rejectWithValue(err.message);  // Return the error message
    }
  }
);

const initialState = {
  rentedBikes: [],
  status: "idle",
  error: null,
};

const rentBikeSlice = createSlice({
  name: "rentBike",
  initialState,
  reducers: {
    //add bike to the rented list (cart)
    addBikeToCart: (state, action) => {
        const {bikeId, quantity} = action.payload
        const existingBike = state.rentedBikes.find((bike) => bike.bikeId === bikeId)

        if (existingBike) {
            existingBike.quantity += quantity //update qty if bike is already in the cart
        } else {
            state.rentedBikes.push({ bikeId, quantity }) //add new bike to the rented list
        }
    },
    removeBikeFromCart: (state, action) => {
        state.rentedBikes = state.rentedBikes.filter((bike) => bike.bikeId !== action.payload.bikeId)

    },
    clearCart: (state) => {
        state.rentedBikes = []
    },
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(rentBike.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(rentBike.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.rentedBikes.push(action.payload);
//       })
//       .addCase(rentBike.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       });
//   },
});

export const {addBikeToCart, removeBikeFromCart, clearCart} = rentBikeSlice.actions

export default rentBikeSlice.reducer;