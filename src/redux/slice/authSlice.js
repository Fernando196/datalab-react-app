import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        authenticate: false,
    },
    reducers:{
        authenticate: (state,action) =>{
            
        }
    }
});

export const { authenticate } = authSlice.actions;
export default authSlice.reducer