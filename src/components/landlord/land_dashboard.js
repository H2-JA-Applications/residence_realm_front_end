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
<<<<<<< HEAD
import  fetchLandlordProperties  from '../landlord/stuff';
=======
import { useLandlordProperties } from '../landlord/stuff';
>>>>>>> e6fc8274454742eb3f3ccb907172f3f7a0cb95b9
import { useNavigate } from 'react-router-dom';
const Land_Dashboard = () => {
        const [properties, setProperties] = useState(null);
        useEffect(() => {
            fetchLandlordProperties()
            .then(fetchProperties => {
                setProperties(fetchProperties);
            })
            .catch(error =>{
                console(error);
            });
        }, []);

    let handleLogout = (e) => {
        e.preventDefault();

        console.log("LOGGING OUT ......")
        localStorage.removeItem("token");
        window.location.href = "/"
        
    }

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
                            <th>Property Type</th>
                            <th></th>
                            <th></th>
                            <th>Add Tenant</th>
                        </tr>
                    </thead>
                    <tbody>
<<<<<<< HEAD
                    {properties.map(property => (
=======
                    {useLandlordProperties.map(property => (
>>>>>>> e6fc8274454742eb3f3ccb907172f3f7a0cb95b9
                    <tr className="row" key={property.id}>
                            <td>{property.address}</td>
                            <td>{property.rent}</td>
                            <td>{property.apartmentNumber}</td>
                            <td>{property.apartmentType}</td>
                            <td>{property.dueDate}</td>
                            <td><button type="button" className="table-button">Edit</button></td>
                            <td><button type="button" className="table-button">Delete</button></td>
                            <td><button type="button" className="table-button">Add</button></td>
                        </tr>
                    ))}
                        </tbody>
                </table>

                    <p class="heading">Menu Options</p>
                    <Link to="/landlord_dashboard/receive_pay"><button type = "button" class="dashboard-button">Add Tenant</button></Link>
                    <Link to="/landlord_dashboard/receive_pay"><button type = "button" class="dashboard-button">Received Payments</button></Link>
                    <Link to="/landlord_dashboard/track_late"><button type = "button" class="dashboard-button">Track Late Payment</button></Link>
                    <Link to="/landlord_dashboard/manage_pay"><button type = "button" class="dashboard-button">Manage Finances</button></Link>
                    <Link to="/landlord_dashboard/add_rentals"><button type = "button" class="dashboard-button">Add Rental</button></Link>
                </section>
            </div>

        </body>
  );
}


export default Land_Dashboard;