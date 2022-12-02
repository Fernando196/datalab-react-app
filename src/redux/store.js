import { configureStore } from '@reduxjs/toolkit';
import graphReducer from './slice/graphicSlice';
import authReducer from './slice/authSlice'
import dataGraphReducer from './slice/dataGraphicSlice';

export default configureStore({
    reducer:{
        auth        : authReducer,
        graphic     : graphReducer,
        dataGraphic : dataGraphReducer
    }
});