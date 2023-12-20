import React from 'react';
import rrlogo from "../../images/rrlogo.png"
import { Link } from 'react-router-dom'
const Land_Dashboard = () => {
    return(
        <body>
            <div class="profile">
                <label>Landlord Dashboard</label>
                <button type = "button" class="btn-signup"> Sign Out</button>
            </div>
            <div class="form">
                <section class="buttons">
                    <img class="logo" src={rrlogo} alt = ""/>
                    <Link to="/tenant_dashboard/choose_rental"><button type = "button" class="dashboard-button">Received Payments</button></Link>
                    <Link to="/tenant_dashboard/payment"><button type = "button" class="dashboard-button">Track Late Payment</button></Link>
                    <Link to="/tenant_dashboard/view_receipts"><button type = "button" class="dashboard-button">Manage Fiances</button></Link>
                    <Link to="/tenant_dashboard/payment_detail"><button type = "button" class="dashboard-button">Add Rental</button></Link>
                </section>
            </div>

        </body>
  );
}


export default Land_Dashboard;