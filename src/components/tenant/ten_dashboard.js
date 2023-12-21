import React, {useState} from 'react';
import rrlogo from "../../images/rrlogo.png"
import { Link } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Login from '../login/login';

const Ten_Dashboard = () => {
    const [date] = useState(new Date());
    
    return(
        <body>
            <Box class="navboard" sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar class="navbar">
                        <Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo}/>
                        <Typography class="title">Tenant Dashboard</Typography>
                        <Link to="/">
                        <IconButton aria-label="delete" size="large" color='secondary'>
                            <LogoutIcon fontSize="inherit"/>
                        </IconButton></Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <div class="dashboard">
                <p class="upcoming"> Upcoming payment: {date.toLocaleDateString()}</p>
                <p class="heading">Menu Options</p>
                <section class="buttons">
                    <Link to="/tenant_dashboard/choose_rental"><button type = "button" class="dashboard-button">Choose Rental</button></Link>
                    <Link to="/tenant_dashboard/payment"><button type = "button" class="dashboard-button">Make Payment</button></Link>
                    <Link to="/tenant_dashboard/view_receipts"><button type = "button" class="dashboard-button">View Receipts</button></Link>
                    <Link to="/tenant_dashboard/payment_detail"><button type = "button" class="dashboard-button">Pay History</button></Link>
                    <Link to="/"><button type = "button" class="dashboard-button">Remove Rentals</button></Link>
                </section>
            </div>
        </body>
    );
}

export default Ten_Dashboard;