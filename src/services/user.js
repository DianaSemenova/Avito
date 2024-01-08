import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from './baseQueryWithReauth/baseQueryWithReauth';

export const userQuery = createApi({
    reducerPath: 'userQuery',
    tagTypes: ['User'],
    baseQuery: baseQueryWithReauth,

    endpoints: (build) => ({
        getUser: build.query({
            query: () => '/user',
            // providesTags: (result) =>
            //     result
            //         ? [
            //               ...result.map(({ id }) => ({ type: 'User', id })),
            //               { type: 'User', id: 'LIST' },
            //           ]
            //         : [{ type: 'User', id: 'LIST' }],
        }),
    }),
});

export const { useGetUserQuery } = userQuery;
