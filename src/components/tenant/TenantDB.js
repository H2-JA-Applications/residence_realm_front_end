import React, { useEffect, useState } from 'react';
import rrlogo from "../../images/rrlogo.png"
import { Link } from 'react-router-dom';
 
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper  from '@mui/material/Paper';
import UserInfo from '../../utils/userInfo';
import UpcomingPaymentService from '../../services/UpcomingPayService';
 
 
const TenantDashboard = () => {
    let [dates, setDates] = useState();
    const authService = new UserInfo();
    const upcomingPayService = new UpcomingPaymentService();
 
    let [information, setInformation] = useState([]);
    const formatPhoneNumber = (phoneNumber) => {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
     
        if (match) {
          return `(${match[1]}) ${match[2]} - ${match[3]}`;
        }
        return phoneNumber;
      };
    function getDate(propId){
        upcomingPayService.getUpcomingDate(propId).then(data2 => {
            setDates(data2[0].dueDate);
        }).catch(error => {
            console.error('Error fetching date:', error);
        });
 
    }
    useEffect(() => {
        // Load payment history when the component mounts
        authService.viewInfo().then(data => {
            setInformation(data);
            getDate(information.data.rentedProperties[0].id)
        }).catch(error => {
            console.error('Error fetching information:', error);
        });
         
    },);
 
    let handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        window.location.href = "/"
    }
 
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
                <div class="dashboard">
                <div class="box">
                    {information.data && information.data.rentedProperties !== undefined ? (
                        <p className="upcoming">UPCOMING PAYMENT: {new Date(dates).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC'})}</p>
                        ) : (
                        <p className="upcoming">NO PROPERTY RENTED</p>
                    )}
                    </div>        
                    <div class="box">
                    <section class="single-column">
                    {information.data ? (
                    <Paper elevation={3}>
                        <Box p={5}>
                        <Avatar sx={{float: 'right'}}>
                            {information.data.firstName?.charAt(0).toUpperCase()}{information.data.lastName?.charAt(0).toUpperCase()}
                        </Avatar>
                        <Typography variant="h5" gutterBottom>
                            Tenant Information
                        </Typography>
                        <Typography variant="body1">
                            <strong>Name:</strong> {information.data.firstName} {information.data.lastName}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Email:</strong> {information.data.email}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Phone:</strong> {formatPhoneNumber(information.data.phoneNumber)}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Date of Birth:</strong> {new Date(information.data.dateOfBirth).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC'  })}
                        </Typography>
                        </Box>
                    </Paper>
                    ) : null}
                   
                    <p class="heading">Menu Options</p>
                    <Link to="/tenant_dashboard/payment">
                        <button
                            type="button"
                            className="dashboard-button"
                            disabled={!information.data || information.data.rentedProperty === null}
                            style={{
                            opacity: !information.data || information.data.rentedProperty === null ? 0.5 : 1,
                            }}
                        >
                        Make Payment
                        </button>
                    </Link>
                       
                        <Link to="/tenant_dashboard/payment_detail"><button type="button" class="dashboard-button">Pay History</button></Link>
                    </section>
                    </div>
                </div>
        </body>
    )
}
 
//dates.toLocaleDateString()
export default TenantDashboard;