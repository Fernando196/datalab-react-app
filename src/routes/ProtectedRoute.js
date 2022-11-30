import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () =>{
    let user     = { loggin: false };

    return user.loggin ? <Outlet /> : <Navigate to='/login' replace />
}

export default ProtectedRoute;