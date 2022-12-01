import { configureStore } from '@reduxjs/toolkit';
import graphReducer from './slice/graphSlice';

export default configureStore({
    reducer:{
        graphic: graphReducer
    }
});