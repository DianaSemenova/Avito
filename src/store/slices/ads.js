import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    adsAll: [],
    adsSeller: [],
    sellerInfo: {},
};

export const adsSlice = createSlice({
    name: 'adsReduces',
    initialState,

    reducers: {
        setAdsAll: (state, action) => {
            state.adsAll = action.payload;
        },
        setAdsSeller: (state, action) => {
            const { sellerID } = action.payload;

            state.adsSeller = state.adsAll.filter(
                (adv) => adv.user_id === sellerID,
            );
        },
        setSellerInfo: (state, action) => {
            const { sellerID } = action.payload;

            state.sellerInfo = state.adsAll.find(
                (adv) => adv.user_id === sellerID,
            ).user;
        },
    },
});

export const { setAdsAll, setAdsSeller, setSellerInfo } = adsSlice.actions;

export default adsSlice.reducer;
