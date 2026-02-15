import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface BlogState {
    blogs: any[];
    currentBlog: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: BlogState = {
    blogs: [],
    currentBlog: null,
    loading: false,
    error: null,
};

export const fetchBlogs = createAsyncThunk('blogs/fetchAll', async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
    return response.data.data;
});

export const createBlog = createAsyncThunk(
    'blogs/create',
    async (blogData: any, { getState, rejectWithValue }) => {
        const state: any = getState();
        const token = state.auth.token;
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, blogData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data.data;
        } catch (err: any) {
            return rejectWithValue(err.response.data.error);
        }
    }
);

export const updateBlog = createAsyncThunk(
    'blogs/update',
    async ({ id, data }: { id: string, data: any }, { getState, rejectWithValue }) => {
        const state: any = getState();
        const token = state.auth.token;
        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`, data, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data.data;
        } catch (err: any) {
            return rejectWithValue(err.response.data.error);
        }
    }
);

export const deleteBlog = createAsyncThunk(
    'blogs/delete',
    async (id: string, { getState, rejectWithValue }) => {
        const state: any = getState();
        const token = state.auth.token;
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return id;
        } catch (err: any) {
            return rejectWithValue(err.response.data.error);
        }
    }
);

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.blogs = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch blogs';
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.blogs.unshift(action.payload);
            })
            .addCase(updateBlog.fulfilled, (state, action) => {
                const index = state.blogs.findIndex(b => b._id === action.payload._id);
                if (index !== -1) state.blogs[index] = action.payload;
            })
            .addCase(deleteBlog.fulfilled, (state, action) => {
                state.blogs = state.blogs.filter(b => b._id !== action.payload);
            });
    },
});

export default blogSlice.reducer;
