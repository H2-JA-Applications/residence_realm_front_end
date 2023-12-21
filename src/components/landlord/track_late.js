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
const Track_Late = () => {
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
            <div class="panel">
                <section class="single-column">
                <section class="double-column">
                    <div class="input-form">
                        <input class="input" id="l_address" type="text" required name="l_address"/>
                        <label class="label" for="l_address">Address</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="rent_ammount" type="text" required name="rent_ammount"/>
                        <label class="label" for="rent_ammount">Rent</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="due_date" type="text" required name="due_date"/>
                        <label class="label" for="due_date">Due Date</label>
                    </div>
                    <select name="role" id="property_type" selectedIndex="-1" class="input2">
                        <option value="">Select Property Type</option>
                        <option value="apartment">Apartment</option>
                        <option value="condo">Condo</option>
                        <option value="house">House</option>
                    </select>
                </section>
                    <div class="input-form">
                            <input class="input" id="apt_num" type="text" required name="apt_num"/>
                            <label class="label" for="apt_num">Apt Number</label>
                    </div>
                    <button type = "button" class="dashboard-button">Add Property</button>
                    <Link to="/landlord_dashboard"><button type = "button" class="dashboard-button">Back To Dashboard</button></Link>
                </section>
            </div>
        </body>
  );
}

export default Track_Late;
