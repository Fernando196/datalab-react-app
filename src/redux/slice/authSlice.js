import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    authenticate:  false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers:{
        authenticate: (state,action) =>{
            state.user = action.payload;
            state.authenticate = true
        },
        logout: (state,action) =>{
            state.user = null;
            state.authenticate = false;
        },
    }
});

export const { authenticate,logout } = authSlice.actions;
export default authSlice.reducer