import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ContactState {
    contacts: any[];
    loading: boolean;
    error: string | null;
}

const initialState: ContactState = {
    contacts: [],
    loading: false,
    error: null,
};

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { getState, rejectWithValue }) => {
        const state: any = getState();
        const token = state.auth.token;
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data.data;
        } catch (err: any) {
            return rejectWithValue(err.response.data.error);
        }
    }
);

export const updateContactStatus = createAsyncThunk(
    'contacts/updateStatus',
    async ({ id, status }: { id: string, status: string }, { getState, rejectWithValue }) => {
        const state: any = getState();
        const token = state.auth.token;
        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/contacts/${id}`, { status }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data.data;
        } catch (err: any) {
            return rejectWithValue(err.response.data.error);
        }
    }
);

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.contacts = action.payload;
            })
            .addCase(updateContactStatus.fulfilled, (state, action) => {
                const index = state.contacts.findIndex(c => c._id === action.payload._id);
                if (index !== -1) state.contacts[index] = action.payload;
            });
    },
});

export default contactSlice.reducer;
