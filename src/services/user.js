import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from './baseQueryWithReauth/baseQueryWithReauth';

export const userQuery = createApi({
    reducerPath: 'userQuery',
    tagTypes: ['User'],
    baseQuery: baseQueryWithReauth,

    endpoints: (build) => ({
        getUser: build.query({
            query: () => '/user',
            providesTags: ['User'],
        }),
        updateUser: build.mutation({
            query: (body) => ({
                url: '/user',
                method: 'PATCH',
                body,
                headers: {
                    'content-type': 'application/json',
                },
                invalidatesTags: ['User'],
            }),
        }),
        updatePassword: build.mutation({
            query: (body) => ({
                url: '/user/password',
                method: 'PATCH',
                body: JSON.stringify({
                    password_1: body.password,
                    password_2: body.newPaswword,
                }),
                headers: {
                    'content-type': 'application/json',
                },
                invalidatesTags: ['User'],
            }),
        }),
        uploadAvatar: build.mutation({
            query: (formData) => {
                console.log('formData', formData);
                return {
                    url: '/user/avatar',
                    method: 'POST',
                    body: formData,
                    // headers: {
                    //     'content-type': 'multipart/form-data',
                    // },
                    invalidatesTags: ['User'],
                };
            },
        }),
    }),
});

export const {
    useGetUserQuery,
    useUpdateUserMutation,
    useUpdatePasswordMutation,
    useUploadAvatardMutation,
} = userQuery;
