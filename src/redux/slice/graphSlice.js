import { createSlice } from "@reduxjs/toolkit";
import data from '../../data/data'

export const graphSlice = createSlice({
    name: 'graph',
    initialState: {
        data: data,
        // selectedValue: data
    },
    reducers:{
        onClickValue: (state,action) => {
            const { name, children } = action.payload;
            // state.selectedValue = name;
        }
    }
});

export const { onClickValue } = graphSlice.actions;
export default graphSlice.reducer