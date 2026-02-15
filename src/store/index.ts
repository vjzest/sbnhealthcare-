import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import blogReducer from './slices/blogSlice';
import contactReducer from './slices/contactSlice';
import seoReducer from './slices/seoSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        blogs: blogReducer,
        contacts: contactReducer,
        seo: seoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
