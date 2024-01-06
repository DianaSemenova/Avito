import { createSlice } from '@reduxjs/toolkit';

const AUTH_INFO = 'auth';

function getAuthFromLocalStorage() {
    try {
        return JSON.parse(localStorage.getItem(AUTH_INFO));
    } catch (error) {
        console.error(error);
        return null;
    }
}

const initialState = {
    access: null,
    refresh: null,
    ID: null,
    email: null,
    name: null,
    surname: null,
    city: null,
};

export const authSlice = createSlice({
    name: 'authReduces',
    initialState: getAuthFromLocalStorage() ?? initialState,

    reducers: {
        setAuth: (state, action) => {
            const { access, refresh, userID, email, name, surname, city } =
                action.payload ?? initialState;
            state.access = access;
            state.refresh = refresh;
            state.ID = userID;
            state.email = email;
            state.name = name;
            state.surname = surname;
            state.city = city;
            localStorage.setItem(AUTH_INFO, JSON.stringify(state));
        },
    },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
