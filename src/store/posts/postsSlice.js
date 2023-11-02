import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    loading: false,
    error: '',
};

export const fetchPostsAsync = createAsyncThunk('users/fetchUsersAsync', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPostsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPostsAsync.rejected, (state, action) => {
                console.log("err:", action.payload)
                state.loading = false;
                state.error = action.payload;
            });
            
    },
});

export default postsSlice.reducer;

