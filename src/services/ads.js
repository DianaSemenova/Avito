import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from './baseQueryWithReauth/baseQueryWithReauth';

export const adsQuery = createApi({
    reducerPath: 'adsQuery',
    tagTypes: ['AdsUser', 'Ads'],
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
        getAd: build.query({
            query: (id) => `/ads/${id}`,
        }),
        addAds: build.mutation({
            query: (body) => ({
                url: '/ads',
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
    }),
});

export const {
    useGetAdsAllQuery,
    useGetAdQuery,
    useGetAdsUserQuery,
    useAddAdsMutation,
} = adsQuery;
