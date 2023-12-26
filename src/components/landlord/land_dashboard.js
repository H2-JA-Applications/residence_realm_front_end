import React from 'react';
import rrlogo from "../../images/rrlogo.png"
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { landlord_properties } from '../landlord/stuff';
const Land_Dashboard = () => {
    return(
        <body>
            <Box class="navboard" sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar class="navbar">
                        <Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo}/>
                        <Typography class="title">Land Dashboard</Typography>
                        <Link to="/">
                        <IconButton aria-label="delete" size="large" color='secondary'>
                            <LogoutIcon fontSize="inherit"/>
                        </IconButton></Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <div class="dashboard">
                <section class="single-column">
                <table>
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Apartment #</th>
                            <th>Property Type</th>
                            <th></th>
                            <th></th>
                            <th>Add Tenant</th>
                        </tr>
                    </thead>
                    <tbody>
                            {landlord_properties.map((property, index) => (
                                <tr
                                    class="row"
                                    key={index}
                                >
                                    <td>{property.payment_ID}</td>
                                    <td>{property.rent}</td>
                                    <td>{property.dueDate}</td>
                                    <td><button type = "button" class="table-button">Edit</button></td>
                                    <td><button type = "button" class="table-button">Delete</button></td>
                                    <td><button type = "button" class="table-button">Add</button></td>
                                    
                                </tr>
                            ))}
                        </tbody>
                </table>

                    <p class="heading">Menu Options</p>
                    <Link to="/landlord_dashboard/receive_pay"><button type = "button" class="dashboard-button">Add Tenant</button></Link>
                    <Link to="/landlord_dashboard/receive_pay"><button type = "button" class="dashboard-button">Received Payments</button></Link>
                    <Link to="/landlord_dashboard/track_late"><button type = "button" class="dashboard-button">Track Late Payment</button></Link>
                    <Link to="/landlord_dashboard/manage_pay"><button type = "button" class="dashboard-button">Manage Finances</button></Link>
                    <Link to="/landlord_dashboard/add_rentals"><button type = "button" class="dashboard-button">Add Rental</button></Link>
                </section>
            </div>

        </body>
  );
}


export default Land_Dashboard;