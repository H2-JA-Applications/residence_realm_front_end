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
const Received_Pay = () => {
    return(
        <body>
            <Box class="navboard" sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar class="navbar">
                        <Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo}/>
                        <Typography class="title">Received Payments</Typography>
                        <Link to="/">
                        <IconButton aria-label="delete" size="large" color='secondary'>
                            <LogoutIcon fontSize="inherit"/>
                        </IconButton></Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <div class="panel">
                <section class="single-column">
                <table>
                    <thead>
                        <tr>
                            <th>Property ID</th>
                            <th>Rent</th>
                            <th>Payment Date</th>
                            <th>Transaction ID</th>
                            <th>Tenant Email</th>
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
                                    <td>{property.dueDate}</td>
                                    <td>{property.dueDate}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                </table>
                <section class="double-column">
                    <Link to="/landlord_dashboard/track_late"><button type = "button" class="dashboard-button">Track Late Payment</button></Link>
                    <Link to="/landlord_dashboard"><button type = "button" class="dashboard-button">Back To Dashboard</button></Link>
                </section>
                </section>
            </div>
        </body>
  );
}

export default Received_Pay;
