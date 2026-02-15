import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface SeoState {
    seoList: any[];
    loading: boolean;
    error: string | null;
}

const initialState: SeoState = {
    seoList: [],
    loading: false,
    error: null,
};

export const fetchAllSeo = createAsyncThunk(
    'seo/fetchAll',
    async (_, { getState, rejectWithValue }) => {
        const state: any = getState();
        const token = state.auth.token;
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/seo`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data.data;
        } catch (err: any) {
            return rejectWithValue(err.response.data.error);
        }
    }
);

export const upsertSeo = createAsyncThunk(
    'seo/upsert',
    async (seoData: any, { getState, rejectWithValue }) => {
        const state: any = getState();
        const token = state.auth.token;
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/seo`, seoData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data.data;
        } catch (err: any) {
            return rejectWithValue(err.response.data.error);
        }
    }
);

export const deleteSeo = createAsyncThunk(
    'seo/delete',
    async (id: string, { getState, rejectWithValue }) => {
        const state: any = getState();
        const token = state.auth.token;
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/seo/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return id;
        } catch (err: any) {
            return rejectWithValue(err.response.data.error);
        }
    }
);

const seoSlice = createSlice({
    name: 'seo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllSeo.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllSeo.fulfilled, (state, action) => {
                state.loading = false;
                state.seoList = action.payload;
            })
            .addCase(upsertSeo.fulfilled, (state, action) => {
                const index = state.seoList.findIndex(s => s.page === action.payload.page);
                if (index !== -1) {
                    state.seoList[index] = action.payload;
                } else {
                    state.seoList.push(action.payload);
                }
            })
            .addCase(deleteSeo.fulfilled, (state, action) => {
                state.seoList = state.seoList.filter(s => s._id !== action.payload);
            });
    },
});

export default seoSlice.reducer;
