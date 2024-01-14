import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    adsAll: [],
    adv: {},
    adsSeller: [],
    adsUser: [],
};

export const authSlice = createSlice({
    name: 'adsReduces',
    initialState,

    reducers: {
        setAdsAll: (state, action) => {
            // const {} = action.payload ;
        },
    },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
