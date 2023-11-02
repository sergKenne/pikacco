import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./posts/postsSlice";
import postSlice from "./post/postSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice,
    post: postSlice
  }
})

export default store;