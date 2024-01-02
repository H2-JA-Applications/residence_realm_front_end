import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/app.css";

// Import your components
import Login from "./login/login";
import TenantDashboard from "./tenant/TenantDB";
import Payment from "./tenant/TenantPaymentProcess";
import PaymentDetails from "./tenant/TenantPaymentDetails";
import LandlordDashboard from "./landlord/LandlordDB";
import AddProperty from "./landlord/LandlordAddProp";
import LatePayments from "./landlord/LandlordLatePay";
import ReceivePayments from "./landlord/LandlordReceivePay";
import AddTenant from "./landlord/LandlordAddTen";
const App = () => {

    const tenantRoutes = [
        { path: "/tenant_dashboard", element: <TenantDashboard />, exact: true },
        { path: "/tenant_dashboard/payment", element: <Payment />, exact: true },
        { path: "/tenant_dashboard/payments", element: <PaymentDetails />, exact: true },
    ];
    
    const landlordRoutes = [
        { path: "/landlord_dashboard", element: <LandlordDashboard />, exact: true },
        { path: "/landlord_dashboard/receivedpayments", element: <ReceivePayments />, exact: true },
        { path: "/landlord_dashboard/latepayments", element: <LatePayments />, exact: true },
        { path: "/landlord_dashboard/addproperty", element: <AddProperty />, exact: true },
        { path: "/landlord_dashboard/:propertyID/add_tenant", element: <AddTenant />, exact: true },
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