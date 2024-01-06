import { configureStore } from '@reduxjs/toolkit';
import { authQuery } from '../services/auth';
import { userQuery } from '../services/user';
import authReduces from './slices/auth';

export const store = configureStore({
    reducer: {
        auth: authReduces,
        [authQuery.reducerPath]: authQuery.reducer,
        [userQuery.reducerPath]: userQuery.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authQuery.middleware)
            .concat(userQuery.middleware),
});
