import { configureStore } from '@reduxjs/toolkit';
import { authQuery } from '../services/auth';

export const store = configureStore({
    reducer: {
        [authQuery.reducerPath]: authQuery.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authQuery.middleware),
});
