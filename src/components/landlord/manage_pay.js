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
import { useLandlordProperties } from '../landlord/stuff';
const Manage_Pay = () => {
    return(
        <body>
            <Box class="navboard" sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar class="navbar">
                        <Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo}/>
                        <Typography class="title">Manage Finances</Typography>
                        <Link to="/">
                        <IconButton aria-label="delete" size="large" color='secondary'>
                            <LogoutIcon fontSize="inherit"/>
                        </IconButton></Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <div class="container">
            <div class="panel">
                <section class="single-column">
                <table>
                    <thead>
                        <tr>
                            <th>Property ID</th>
                            <th>Water Bill</th>
                            <th>Electricity Bill</th>
                            <th>Due Date</th>
                            <th>Tenant Email</th>
                        </tr>
                    </thead>
                    <tbody>
                            {useLandlordProperties.map((property, index) => (
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
                    <Link to="/landlord_dashboard"><button type = "button" class="dashboard-button">Back To Dashboard</button></Link>
                </section>
            </div>
            </div>
        </body>
  );
}

export default Manage_Pay;
