import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    post: null,
    loading: false,
    error: '',
};

export const fetchPostAsync = createAsyncThunk('users/fetchUsersAsync', async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await response.json();
});

const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPostAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.post = action.payload;
            })
            .addCase(fetchPostAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        
            
    },
});

export default postSlice.reducer;

