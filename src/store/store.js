import { configureStore } from '@reduxjs/toolkit';
import authReduces from './slices/auth';
import adsReduces from './slices/ads';
import { authQuery } from '../services/auth';
import { userQuery } from '../services/user';
import { adsQuery } from '../services/ads';

export const store = configureStore({
    reducer: {
        auth: authReduces,
        ads: adsReduces,
        [authQuery.reducerPath]: authQuery.reducer,
        [userQuery.reducerPath]: userQuery.reducer,
        [adsQuery.reducerPath]: adsQuery.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authQuery.middleware)
            .concat(userQuery.middleware)
            .concat(adsQuery.middleware),
});
