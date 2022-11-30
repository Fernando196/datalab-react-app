import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthService from "../services/auth.service";

const ProtectedRoute = () =>{
    return AuthService.isAuthenticated() 
    ? <Outlet /> 
    : <Navigate to='/login' replace />
}

export default ProtectedRoute;