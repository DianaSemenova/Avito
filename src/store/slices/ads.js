import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    adsAll: [],
    searchData: [],
    isLoading: null,
    error: null,
    adsSeller: [],
    sellerInfo: {},
    isSellerID: true,
    filterAdsAll: [],
};

export const adsSlice = createSlice({
    name: 'adsReduces',
    initialState,

    reducers: {
        setAdsAll: (state, action) => {
            const { data } = action.payload;

            state.adsAll = [...data].sort((a, b) => {
                const dateA = new Date(a.created_on);
                const dateB = new Date(b.created_on);

                return dateB - dateA;
            });
        },
        setSearchData: (state) => {
            if (state.adsAll.length > 0) {
                // создается массив для выпадающего списка на форме поиска объявлений
                state.searchData = state.adsAll.map((adv) => adv.title);
            }
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setAdsSeller: (state, action) => {
            const { sellerID } = action.payload;

            if (state.adsAll.length > 0 && sellerID) {
                state.adsSeller = state.adsAll.filter(
                    (adv) => adv.user_id === Number(sellerID),
                );
            }
        },
        setSellerInfo: (state, action) => {
            const { sellerID } = action.payload;
            state.sellerInfo = state.adsAll.find(
                (adv) => adv.user_id === Number(sellerID),
            )?.user;
        },
        setIsSellerID: (state, action) => {
            const { sellerID } = action.payload;
            if (state.adsAll.length > 0 && sellerID) {
                const sellerInfo = state.adsAll.find(
                    (adv) => adv.user_id === Number(sellerID),
                )?.user;

                if (sellerInfo) {
                    state.isSellerID = true;
                } else {
                    state.isSellerID = false;
                }
            }
        },
        setFilterAdsAll: (state, action) => {
            state.filterAdsAll = state.adsAll.filter((item) =>
                item.title.toLowerCase().includes(action.payload.toLowerCase()),
            );
        },
    },
});

export const {
    setAdsAll,
    setSearchData,
    setAdsSeller,
    setSellerInfo,
    setIsLoading,
    setError,
    setFilterAdsAll,
    setIsSellerID,
} = adsSlice.actions;

export default adsSlice.reducer;
