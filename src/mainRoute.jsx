import React, { Suspense } from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutUsPage from "./AboutUsPage.jsx";
import Features from "./Features.jsx";
import ContactUsCompo from "./ContactUsCompo.jsx";
import GetStoreData from "./GetStoreData.jsx";
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";
import Dashboard from "./Dashboard.jsx";
const AdminRoute = React.lazy(() => { return import('./admin/AdminRouter') });
const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element:<Navigate to="/home" replace />
    },{
        path: "/home",
        element: <HomePage />,
    },  {
        path: "/about",
        element: <AboutUsPage />,
    }, {
        path: "/contactus",
        element: <ContactUsCompo />,
    }, {
        path: "/features",
        element: <Features />,
    }, {
        path: "/getStoreData",
        element: <GetStoreData />,
    }, {
        path: "/login",
        element: <Login />,
    }, {
        path: "/register",
        element: <Registration />,
    }, {
        path: "/dashboard",
        element: <Dashboard />,
    }, {
        path: "/admin/*",
        element: <><Suspense fallback={<h2>Loading...</h2>}> <AdminRoute /></Suspense></>,  
    }
]);
export default MainRoutes;