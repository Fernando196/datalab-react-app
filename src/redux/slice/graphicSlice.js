import { createSlice } from "@reduxjs/toolkit";
import data from '../../data/data';

export const graphicSlice = createSlice({
    name: 'graphic',
    initialState: {
        selected: {
            name     : '',
            children : data
        }
    },
    reducers:{
        onClickValue: (state,action) => {
            let { name, children } = action.payload;
            state.selected = { name: name || '',children: children || [] }
        }
    }
});

export const { onClickValue } = graphicSlice.actions;
export default graphicSlice.reducer