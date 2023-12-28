import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import "./styles/app.css";

// Import your components
import Login from "./login/login";
import TenantDashboard from "./tenant/TenantDB";
import Rental from "./tenant/rentals";
import Payment from "./tenant/payment";
import Receipts from "./tenant/receipts";
import Payment_Details from "./tenant/payment_dets";
import LandlordDashboard from "./landlord/LandlordDB";
import Add_Rental from "./landlord/add_rentals";
import Track_Late from "./landlord/track_late";
import Manage_Pay from "./landlord/manage_pay";
import Received_Pay from "./landlord/receive_pay";
import AddTenant from "./landlord/add_ten";
const App = () => {
    // let [token, setToken] = useState(localStorage.getItem('jwtToken'));
    // let [roles, setRoles]  = useState([]);

    // useEffect(() => {
    //     if (token) {
    //         const decodedToken = jwtDecode(token);
    //         setRoles(localStorage.getItem("role"))

    //     }
    // }, [token]);

    const tenantRoutes = [
        { path: "/tenant_dashboard", element: <TenantDashboard />, exact: true },
        { path: "/tenant_dashboard/choose_rental", element: <Rental />, exact: true },
        { path: "/tenant_dashboard/payment", element: <Payment />, exact: true },
        { path: "/tenant_dashboard/view_receipts", element: <Receipts />, exact: true },
        { path: "/tenant_dashboard/payment_detail", element: <Payment_Details />, exact: true },
    ];
    
    const landlordRoutes = [
        { path: "/landlord_dashboard", element: <LandlordDashboard />, exact: true },
        { path: "/landlord_dashboard/receive_pay", element: <ReceivePayments />, exact: true },
        { path: "/landlord_dashboard/track_late", element: <Track_Late />, exact: true },
        { path: "/landlord_dashboard/manage_pay", element: <Manage_Pay />, exact: true },
        { path: "/landlord_dashboard/add_rentals", element: <Add_Rental />, exact: true },
        { path: "/landlord_dashboard/add_tenant", element: <AddTenant />, exact: true },
    ];
 
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login />} exact={true} />
                {tenantRoutes.map((route, index) => <Route key={index} {...route} />)}
                {landlordRoutes.map((route, index) => <Route key={index} {...route} />)}
            </Routes>
        </BrowserRouter>
    );
}
 
export default App;