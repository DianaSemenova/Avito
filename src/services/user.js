import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from './baseQueryWithReauth/baseQueryWithReauth';

export const userQuery = createApi({
    reducerPath: 'userQuery',
    tagTypes: ['User'],
    baseQuery: baseQueryWithReauth,

    endpoints: (build) => ({
        getUser: build.query({
            query: () => '/user',
            providesTags: (result) => result && [{ type: 'User', id: 'LIST' }],
        }),
        updateUser: build.mutation({
            query: (body) => ({
                url: '/user',
                method: 'PATCH',
                body,
                headers: {
                    'content-type': 'application/json',
                },
                invalidatesTags: [{ type: 'User', id: 'LIST' }],
            }),
        }),
        updatePassword: build.mutation({
            query: (body) => ({
                url: '/user/password',
                method: 'PATCH',
                body,
                headers: {
                    'content-type': 'application/json',
                },
                invalidatesTags: [{ type: 'User', id: 'LIST' }],
            }),
        }),
        uploadAvatar: build.mutation({
            query: (body) => ({
                url: '/user/avatar',
                method: 'PATCH',
                body,
                headers: {
                    'content-type': 'application/json',
                },
                invalidatesTags: [{ type: 'User', id: 'LIST' }],
            }),
        }),
    }),
});

export const {
    useGetUserQuery,
    useUpdateUserMutation,
    useUpdatePasswordMutation,
    useUploadAvatardMutation,
} = userQuery;
