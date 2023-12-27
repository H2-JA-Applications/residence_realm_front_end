import React, { useState } from 'react';
import rrlogo from "../../images/rrlogo.png"
import { Link } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const Ten_Dashboard = () => {
    const [date] = useState(new Date());
    const [openConfirmation, setOpenConfirmation] = useState(false);

    const handleRemoveRental = () => {
        setOpenConfirmation(true);
    };
    let handleLogout = (e) => {
        e.preventDefault();

        console.log("LOGGING OUT ......")
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        window.location.href = "/"
        
    }

    const handleConfirmationClose = () => {
        setOpenConfirmation(false);
    };

    const handleRemoveConfirmed = () => {
        // Implement the logic to remove the rental here
        // For now, just close the confirmation popup
        setOpenConfirmation(false);
    };

    return (
        <body>
            <Box class="navboard" sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar class="navbar">
                        <Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo} />
                        <Typography class="title">Tenant Dashboard</Typography>
                        <Link onClick={handleLogout}>
                            <IconButton aria-label="delete" size="large" color='secondary'>
                                <LogoutIcon fontSize="inherit" />
                            </IconButton>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <div class="container">
                <div class="dashboard">
                    <p class="upcoming">Upcoming payment: {date.toLocaleDateString()}</p>
                    <p class="heading">Menu Options</p>
                    <section class="single-column">
                        {/* <Link to="/tenant_dashboard/choose_rental"><button type="button" class="dashboard-button">Choose Rdental</button></Link> */}
                        <Link to="/tenant_dashboard/payment"><button type="button" class="dashboard-button">Make Payment</button></Link>
                        {/* <Link to="/tenant_dashboard/view_receipts"><button type="button" class="dashboard-button">View Receipts</button></Link> */}
                        <Link to="/tenant_dashboard/payment_detail"><button type="button" class="dashboard-button">Pay History</button></Link>
                        {/* <Button type="button" class="dashboard-button" onClick={handleRemoveRental}>Remove Rentals</Button> */}
                    </section>
                </div>
            </div>

            {/* Remove Rentals Confirmation Dialog */}
            <Dialog open={openConfirmation} onClose={handleConfirmationClose}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to remove the current rental?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmationClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleRemoveConfirmed} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </body>
    );
}

export default Ten_Dashboard;
