import { createSlice } from "@reduxjs/toolkit";
import data from '../../data/data'

export const dataGraphSlice = createSlice({
    name: 'dataGraph',
    initialState: data,
});

export default dataGraphSlice.reducer