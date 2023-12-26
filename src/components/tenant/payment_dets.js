
import React, {useState} from 'react';
import rrlogo from "../../images/rrlogo.png";
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const PaymentDetails = () => {
    const [date] = useState(new Date());
    return(
        <body>
            <Box class="navboard" sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar class="navbar">
                        <Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo}/>
                        <Typography class="title">Payment History</Typography>
                        <Link to="/">
                        <IconButton aria-label="delete" size="large" color='secondary'>
                            <LogoutIcon fontSize="inherit"/>
                        </IconButton></Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <div class="container">
            <div class = "panel">
                <section class="single-column">
                    <section class="double-column">
                        <p class="dashboard-label">Rent</p>
                        <p class="dashboard-label">Status</p>
                        <p class="dashboard-label">Payment Type</p>
                        <p class="dashboard-label">Date Paid: {date.toLocaleDateString()}</p>
                        <p class="dashboard-label">Property Id</p>
                        <p class="dashboard-label">Payment Id</p>
                    </section>
                    <button type = "button" class="dashboard-button">Payment History</button>
                    <Link to="/tenant_dashboard"><button type = "button" class="dashboard-button">Back To Main Menu</button></Link>
                </section>
            </div>
            </div>
    </body>
  );
}


export default PaymentDetails;
