import React, {useState} from 'react';
import rrlogo from "../../images/rrlogo.png"
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Ten_Dashboard = () => {
    const [date] = useState(new Date());
    return(
    <body>
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static" style={{background:"white", width: "80%"}}>
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
                </AppBar>
            </Box>
        <div class="profile">
            <label>Tenant Dashboard</label>
            <button type = "button" class="btn-signup"> Sign Out</button>
        </div>
        <div class="dashboard">
            <p class="upcoming"> Upcoming payment: {date.toLocaleDateString()}</p>
            <section class="buttons">
            <img class="med-logo" src={rrlogo} alt = ""/>
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