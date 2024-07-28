import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const dummyData = [
    {
      id: 1,
      title: "Dummy Post 1",
      content: "This is the content for dummy post 1.",
    },
    {
      id: 2,
      title: "Dummy Post 2",
      content: "This is the content for dummy post 2.",
    },
    {
      id: 3,
      title: "Dummy Post 3",
      content: "This is the content for dummy post 3.",
    },
    {
      id: 4,
      title: "Dummy Post 4",
      content: "This is the content for dummy post 3.",
    },
    {
      id: 5,
      title: "Dummy Post 5",
      content: "This is the content for dummy post 3.",
    },
    {
      id: 6,
      title: "Dummy Post 6",
      content: "This is the content for dummy post 3.",
    },
  ];
  return dummyData;
});


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.posts.push(action.payload)
        },
        postUpdated: (state, action) => {
            const index = state.posts.findIndex(
                (post) => post.id === action.payload.id
            )
            state.posts[index] = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = state.posts.concat(action.payload)
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {postAdded, postUpdated} = postsSlice.actions


export default postsSlice.reducer
