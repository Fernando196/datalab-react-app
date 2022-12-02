import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthService from "../services/auth.service";

const ProtectedRoute = () =>{
    const isAuthenticated = useSelector(state => state.auth.authenticate);
    
    return isAuthenticated
    ? <Outlet /> 
    : <Navigate to='/login' />
}

export default ProtectedRoute;