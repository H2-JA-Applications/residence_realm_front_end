import React, { useEffect, useState } from 'react';
import rrlogo from "../../images/rrlogo.png"
import { Link, useNavigate} from 'react-router-dom';
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

const LandlordDashboard = () => {
    const [properties, setProperties] = useState([]);
    const [info, setInformation] = useState([]);
    const navigate = useNavigate();
    const inform = new UserInfo();

    let handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        window.location.href = "/"
    }

    const formatPhoneNumber = (phoneNumber) => {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
     
        if (match) {
          return `(${match[1]}) ${match[2]} - ${match[3]}`;
        }
        return phoneNumber;
      };

    const addTenantButton = (propertyID) =>{
        localStorage.setItem("propertyID", propertyID)
        navigate(`/landlord_dashboard/${propertyID}/add_tenant`); 
    }
    const removeTenantButton = (propertyId, tenantId) => {
        // Use propertyService to remove the tenant from the property
        propertyService.removeTenanttoProperty(propertyId, tenantId)
            .then(() => {
                // Refresh the properties list after successfully removing the tenant
                propertyService.getLandlordProperties()
                    .then(fetchedProperties => {
                        setProperties(fetchedProperties);
                    })
                    .catch(error => {
                        console.error('Error fetching properties after removing tenant:', error);
                    });
            })
            .catch(error => {
                console.error('Error removing tenant from property:', error);
            });
    };

    useEffect(() => {
        propertyService.getLandlordProperties()
            .then(fetchedProperties => {
                setProperties(fetchedProperties);
            })
            .catch(error => {

            });
        inform.viewInfo().then(data => {
            if (!data) window.location.href = "/";
            setInformation(data);
        }).catch(error => {
            console.error('Error fetching information:', error);
        });
    }, [inform]);
    return(
        <body>
            <Box class="navboard" sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar class="navbar">
                        <Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo}/>
                        <Typography class="title">Landlord Dashboard</Typography>
                        <Link  onClick={handleLogout}>
                        <IconButton aria-label="delete" size="large" color='secondary' >
                            <LogoutIcon fontSize="inherit"/>
                        </IconButton></Link>
                    </Toolbar>
                </AppBar>
            </Box>
            
            <div class="dashboard">
                <section class="box">
                <table class="lltable">
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Apt #</th>
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
                                            <button onClick={() => {addTenantButton(property.id)}}>Add Tenant</button>
                                        ) : (
                                            <div>
                                            <p>{property.tenants[0].firstName} {property.tenants[0].lastName}</p>
                                            <button onClick={() => { removeTenantButton(property.id, property.tenants[0].id) }}
                                            class="removetenant">-</button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    ) : null}
                </table>
                </section>
                <section class="box">
                    <div class="single-column">
                    {info.data ? (
                    <Paper elevation={3}>
                        <Box p={5}>
                        <Avatar sx={{float: 'right'}}>
                            {info.data.firstName?.charAt(0).toUpperCase()}{info.data.lastName?.charAt(0).toUpperCase()}
                        </Avatar>
                        <Typography variant="h5" gutterBottom>
                            Landlord Information
                        </Typography>
                        <Typography variant="body1">
                            <strong>Name:</strong> {info.data.firstName} {info.data.lastName}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Email:</strong> {info.data.email}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Phone:</strong> {formatPhoneNumber(info.data.phoneNumber)}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Date of Birth:</strong> {new Date(info.data.dateOfBirth).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC'  })}
                        </Typography>
                        </Box>
                    </Paper>
                    ) : null}
                        <p class="heading">Menu Options</p>
                        <Link to="/landlord_dashboard/addproperty"><button type = "button" class="dashboard-button">Add Property</button></Link>
                        <Link to="/landlord_dashboard/receivedpayments"><button type = "button" class="dashboard-button">Received Payments</button></Link>
                        <Link to="/landlord_dashboard/latepayments"><button type = "button" class="dashboard-button">Track Late Payment</button></Link>
                    </div>
                </section>
            </div>

        </body>
  );
  
}


export default LandlordDashboard;