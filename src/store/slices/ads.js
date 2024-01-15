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

            if (state.adsAll.length > 0) {
                state.adsSeller = state.adsAll.filter(
                    (adv) => adv.user_id === Number(sellerID),
                );
            }
        },
        setSellerInfo: (state, action) => {
            const { sellerID } = action.payload;
            if (state.adsAll.length > 0) {
                state.sellerInfo = state.adsAll.find(
                    (adv) => adv.user_id === Number(sellerID),
                ).user;
            }
        },
    },
});

export const { setAdsAll, setAdsSeller, setSellerInfo } = adsSlice.actions;

export default adsSlice.reducer;
