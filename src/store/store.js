import { configureStore } from '@reduxjs/toolkit';
import { authQuery } from '../services/auth';
import { userQuery } from '../services/user';
import authReduces from './slices/auth';
import { adsQuery, adsQueryAuth } from '../services/ads';

export const store = configureStore({
    reducer: {
        auth: authReduces,
        [authQuery.reducerPath]: authQuery.reducer,
        [userQuery.reducerPath]: userQuery.reducer,
        [adsQuery.reducerPath]: adsQuery.reducer,
        [adsQueryAuth.reducerPath]: adsQueryAuth.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authQuery.middleware)
            .concat(userQuery.middleware)
            .concat(adsQuery.middleware)
            .concat(adsQueryAuth.middleware),
});
