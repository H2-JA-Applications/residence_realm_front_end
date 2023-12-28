import React, {useState, useEffect} from 'react';
import rrlogo from "../../images/rrlogo.png"
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Rental = () => {
    
    const [date] = useState(new Date());
    const [selectedRow, setSelectedRow] = useState(null);
    const [payments, setPayments] = useState([]);

    
    return(
        <body>
            <Box class="navboard" sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar class="navbar">
                    <Link to="/tenant_dashboard"><Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo}/></Link>
                        <Typography class="title">Choose Rental</Typography>
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
          <th>Tenant ID</th>
          <th>Property ID</th>
          <th>Amount</th>
          <th>Timestamp</th>
          <th>Date Paid</th>
          <th>Payment Status</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
                    
               
                    <div class="input-form">
                        <input class="input" id="address" type="text" required name="address"/>
                        <label class="label" for="address">Address</label>
                    </div>
                    <p class="dashboard-label">Rent: {selectedRow}</p>
                    <p class="dashboard-label">Due Date: {date.toLocaleDateString()}</p>
                    <button type = "button" class="dashboard-button">Search Address</button>
                    <button type = "button" class="dashboard-button">Pick Property</button>
                    <Link to="/tenant_dashboard"><button type = "button" class="dashboard-button">Back To Main Menu</button></Link>
                </section>
            </div>
            </div>
        </body>
  );
}

export default Rental;