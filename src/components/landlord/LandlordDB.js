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
import propertyService from '../../services/PropertyService';
import UserInfo from '../../utils/userInfo';
import Paper  from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const LandlordDashboard = () => {
    const [properties, setProperties] = useState([]);

    let handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        window.location.href = "/"
    }

    useEffect(() => {
        propertyService.getLandlordProperties()
            .then(fetchedProperties => {
                setProperties(fetchedProperties);
            })
            .catch(error => {

            });
        userInfo.viewInfo().then(data => {
            if (!data) window.location.href = "/";
            setInformation(data);
        }).catch(error => {
            console.error('Error fetching information:', error);
        });
    }, []);
    return(
        <body>
            <Box class="navboard" sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar class="navbar">
                        <Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo}/>
                        <Typography class="title">Land Dashboard</Typography>
                        <Link  onClick={handleLogout}>
                        <IconButton aria-label="delete" size="large" color='secondary' >
                            <LogoutIcon fontSize="inherit"/>
                        </IconButton></Link>
                    </Toolbar>
                </AppBar>
            </Box>
            
            <div class="dashboard">
                <section class="single-column">
                <table>
                <thead>
    <tr>
        <th>Address</th>
        <th>Apartment #</th>
        <th>Type</th>
        <th>Rent</th>
        <th>Tenant</th>
        <th></th>
    </tr>
</thead>
{properties ? (
    <tbody>
        {properties.map((property, i) => {
            return (
                <tr key={property.id}>
                    <td>{property.address}</td>
                    <td>
                        {property.apartmentType === 'House' ? '---' : property.apartmentNumber}
                    </td>
                    <td>{property.apartmentType}</td>
                    <td>{property.rent}</td>
                    <td>
                        {property.tenants === null || property.tenants === undefined || property.tenants.length === 0 ? (
                            <button onClick={() => { }}>Add Tenant</button>
                        ) : (
                            <p>{property.tenants[0].firstName} {property.tenants[0].lastName}</p>
                        )}
                    </td>
                </tr>
            );
        })}
    </tbody>
) : null}
                </table>

                    <p class="heading">Menu Options</p>
                    <Link to="/landlord_dashboard/add_rentals"><button type = "button" class="dashboard-button">Add Property</button></Link>
                    <Link to="/landlord_dashboard/receive_pay"><button type = "button" class="dashboard-button">Received Payments</button></Link>
                    <Link to="/landlord_dashboard/track_late"><button type = "button" class="dashboard-button">Track Late Payment</button></Link>
                    <Link to="/landlord_dashboard/manage_pay"><button type = "button" class="dashboard-button">Manage Finances</button></Link>
                </section>
            </div>

        </body>
  );
  
}


export default LandlordDashboard;