import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  status: "idle",
  error: null,
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await fetch(`http://127.0.0.1:8000/comments/`);
    const data = await response.json();
    return data;
  }
);

export const addNewComment = createAsyncThunk(
  "comments/addNewComment",
  async (formData) => {
    const response = await axios.post(
      `http://127.0.0.1:8000/comments/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data; //added .data and it's fixed serializer's error
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentAdded: (state, action) => {
      state.comments.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewComment.fulfilled, (state, action) => {
        state.comments.push(action.payload); //adds newly created comment
      })
      ;
  },
});

export const { commentAdded } = commentSlice.actions;

export default commentSlice.reducer;
