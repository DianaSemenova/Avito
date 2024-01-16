import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from './baseQueryWithReauth/baseQueryWithReauth';

export const adsQuery = createApi({
    reducerPath: 'adsQuery',
    tagTypes: ['AdsUser', 'Ads', 'Comments'],
    baseQuery: baseQueryWithReauth,

    endpoints: (build) => ({
        getAdsAll: build.query({
            query: () => '/ads',
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Ads', id })),
                          { type: 'Ads', id: 'LIST' },
                      ]
                    : [{ type: 'Ads', id: 'LIST' }],
        }),
        getAdv: build.query({
            query: (id) => `/ads/${id}`,
        }),
        getAdsUser: build.query({
            query: () => '/ads/me',
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'AdsUser', id })),
                          { type: 'AdsUser', id: 'LIST' },
                      ]
                    : [{ type: 'AdsUser', id: 'LIST' }],
        }),
        addNewAdvText: build.mutation({
            query: (body) => ({
                url: '/adstext',
                method: 'POST',
                body,
                headers: {
                    'content-type': 'application/json',
                },
                invalidatesTags: [
                    { type: 'Ads', id: 'LIST' },
                    { type: 'AdsUser', id: 'LIST' },
                ],
            }),
        }),
        updateAdv: build.mutation({
            query: (body, id) => ({
                url: `/ads/${id}`,
                method: 'PATCH',
                body,
                headers: {
                    'content-type': 'application/json',
                },
                invalidatesTags: [
                    { type: 'Ads', id: 'LIST' },
                    { type: 'AdsUser', id: 'LIST' },
                ],
            }),
        }),
        deletedAdv: build.mutation({
            query: (id) => ({
                url: `/ads/${id}`,
                method: 'DELETED',
                headers: {
                    'content-type': 'application/json',
                },
                invalidatesTags: [
                    { type: 'Ads', id: 'LIST' },
                    { type: 'AdsUser', id: 'LIST' },
                ],
            }),
        }),
        uploadImageAdv: build.mutation({
            query: (body, id) => ({
                url: `/ads/${id}/image`,
                method: 'POST',
                body,
                headers: {
                    'content-type': 'application/json',
                },
                invalidatesTags: [
                    { type: 'Ads', id: 'LIST' },
                    { type: 'AdsUser', id: 'LIST' },
                ],
            }),
        }),
        deleteImageAdv: build.mutation({
            query: (body, id) => ({
                url: `/ads/${id}/image`,
                method: 'DELETE',
                body,
                headers: {
                    'content-type': 'application/json',
                },
                invalidatesTags: [
                    { type: 'Ads', id: 'LIST' },
                    { type: 'AdsUser', id: 'LIST' },
                ],
            }),
        }),
        getCommentsAdv: build.query({
            query: (id) => `/ads/${id}/comments`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Comments', id })),
                          { type: 'Comments', id: 'LIST' },
                      ]
                    : [{ type: 'Comments', id: 'LIST' }],
        }),
        createComment: build.mutation({
            query: (body) => ({
                url: `/ads/${body.id}/comments`,
                method: 'POST',
                body: JSON.stringify({
                    text: body.text,
                }),
                headers: {
                    'content-type': 'application/json',
                },
                invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
            }),
        }),
    }),
});

export const {
    useGetAdsAllQuery,
    useGetAdvQuery,
    useGetAdsUserQuery,
    useAddNewAdvTextMutation,
    useUpdateAdvMutation,
    useDeletedAdvMutation,
    useUploadImageAdvMutation,
    useDeleteImageAdvMutation,
    useGetCommentsAdvQuery,
    useCreateCommentMutation,
} = adsQuery;
