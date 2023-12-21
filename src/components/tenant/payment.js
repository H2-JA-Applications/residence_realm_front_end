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

const Payment = () => {

    return(
        <body>
            <Box class="navboard" sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar class="navbar">
                        <Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo}/>
                        <Typography class="title">Choose Rental</Typography>
                        <Link to="/">
                        <IconButton aria-label="delete" size="large" color='secondary'>
                            <LogoutIcon fontSize="inherit"/>
                        </IconButton></Link>
                    </Toolbar>
                </AppBar>
            </Box>




            <div class="panel">
                <section class="single-column">
                    <select name="role" id="role" selectedIndex="-1" class="input2">
                        <option value="">Select a Payment Type</option>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                        <option value="ach">ACH</option>
                        <option value="echeck">ECheck</option>
                    </select>
                <section class="double-column">
                    <div class="input-form">
                        <input class="input" id="accounting/cardnumber" type="password" required name="accounting/cardnumber"/>
                        <label class="label" for="accounting/cardnumber">Account/Card Number</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="csv/routingnumber" type="text" required name="csv/routingnumber"/>
                        <label class="label" for="csv/routingnumber">CSV/Routing Number</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="expire" type="text" required name="expire"/>
                        <label class="label" for="expire">Expiration Date</label>
                    </div>
                    <select name="role" id="role" selectedIndex="-1" class="input2">
                        <option value="">Select Account Type</option>
                        <option value="checking">Checking</option>
                        <option value="savings">Savings</option>
                    </select>
                </section>
                
                    <button type = "button" class="dashboard-button">Make Payment</button>
                    <Link to="/tenant_dashboard"><button type = "button" class="dashboard-button">Back To Dashboard</button></Link>
                </section>
            </div>
        </body>
  );
}

export default Payment;
