import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuth } from '../store/slices/auth';

const baseQueryWithReauth = async (args, api, extraOptions) => {
    const baseQuery = fetchBaseQuery({
        baseUrl: 'http://localhost:8090/',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth?.access;

            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    });

    const result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status !== 401) {
        return result;
    }
    const logOut = () => {
        api.dispatch(setAuth(null));
        localStorage.removeItem('auth');
        // window.location.href("/auth");
    };

    const { auth } = api.getState();

    // console.log('auth', auth);

    // if (!auth.refresh) {
    //     return logOut();
    // }

    if (auth.refresh) {

    const refreshToken = await baseQuery(
        {
            url: 'auth/login/',
            method: 'PUT',
            body: {
                refresh_token: auth.refresh,
            },
        },
        api,
        extraOptions,
    );


    // if (!refreshToken.data.access_token) {
    //     return logOut();
    // }

    api.dispatch(setAuth({ ...auth, access: refreshToken?.data?.access_token }));

    const retryResult = await baseQuery(args, api, extraOptions);

    if (retryResult?.error?.status === 401) {
        return logOut();
    }
    return retryResult;
}
};

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
