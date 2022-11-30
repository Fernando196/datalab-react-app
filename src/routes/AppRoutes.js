import React from "react";
import { Route, Routes } from "react-router-dom";

//Pages
import Dashboard from "../pages/dashboard/dashboard";
import NotFound from "../pages/not-found/notFound";
import ProtectedRoutes from "./ProtectedRoute";

const AppRoutes = () =>(
    <Routes>
        <Route element={ <ProtectedRoutes /> }>
            <Route path='/' element={ <Dashboard /> }></Route>
        </Route>
        <Route path='*' element={ <NotFound /> }></Route>
    </Routes>
)

export default AppRoutes;