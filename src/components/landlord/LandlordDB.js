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
    const [information, setInformation] = useState([]);
    const userInfo = new UserInfo();
    const [addTenantConfirmationOpen, setAddTenantConfirmationOpen] = useState(false);
    const [removeTenantConfirmationOpen, setRemoveTenantConfirmationOpen] = useState(false);
    const [confirmationType, setConfirmationType] = useState(null);
    const [confirmationProperty, setConfirmationProperty] = useState(null);
    const [confirmationTenant, setConfirmationTenant] = useState(null);

    const handleAddTenant = (property) => {
        setAddTenantConfirmationOpen(true);
        setConfirmationType('addTenant');
        setConfirmationProperty(property);
      };

      const handleConfirmationClose = () => {
        setAddTenantConfirmationOpen(false);
        setRemoveTenantConfirmationOpen(false);
      };
    
      const handleRemoveTenantConfirmation = (property,tenant) => {
        setRemoveTenantConfirmationOpen(true);
        setConfirmationType('removeTenant');
        setConfirmationProperty(property);
        setConfirmationTenant(tenant);
        console.log(property);
        console.log(tenant);
        console.log(confirmationType);
        console.log(confirmationProperty)
      };
    
      const handleConfirmationProceed = () => {
        if (confirmationType === 'addTenant') {
          console.log('Adding tenant...');
          // Implement the logic to add the tenant
        } else if (confirmationType === 'removeTenant') {
          console.log('Removing tenant...');
          propertyService.removeTenanttoProperty(confirmationProperty, confirmationTenant)

            .then(() => {
              alert("Tenant removed");
            })
            .catch(() => {
              alert("Failed to remove tenant!");
            });
        }
        handleConfirmationClose();
      };
    

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
    return (
      <body>
          <Box class="navboard" sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                  <Toolbar class="navbar">
                      <Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo} />
                      <Typography class="title">Landlord Dashboard</Typography>
                      <Link onClick={handleLogout}>
                          <IconButton aria-label="delete" size="large" color='secondary' >
                              <LogoutIcon fontSize="inherit" />
                          </IconButton>
                      </Link>
                  </Toolbar>
              </AppBar>
          </Box>
  
          <div class="dashboard">
              <section class="box">
                  {properties && properties.length > 0 ? (
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
                          <tbody>
                              {properties.map((property, i) => {
                                  return (
                                      <tr key={property.id}>
                                          <td>{property.address}</td>
                                          <td>
                                              {property.apartmentType === 'House' ? '-----' : property.apartmentNumber}
                                          </td>
                                          <td>{property.apartmentType}</td>
                                          <td>{property.rent.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                                          <td>
                                              {property.tenants === null || property.tenants === undefined || property.tenants.length === 0 ? (
                                                  <button onClick={() => handleAddTenant(property.id)}>Add Tenant</button>
                                              ) : (
                                                  <>
                                                      <p>{property.tenants[0].firstName} {property.tenants[0].lastName}
                                                          <Button
                                                              class="removetenant"
                                                              onClick={() => handleRemoveTenantConfirmation(property.id, property.tenants[0].id)}
                                                          >-</Button></p>
                                                  </>
                                              )}
                                          </td>
                                      </tr>
                                  );
                              })}
                          </tbody>
                      </table>
                  ) : (
                      <Typography style={{ fontSize: '36px', fontWeight: 'bold' }}>No Properties Owned</Typography>
                  )}
              </section>
              <section class="box">
                  <section class="single-column">
  
                      {information.data ? (
                          <Paper elevation={3}>
                              <Box p={5} sx={{ p: '20px' }}>
                                  <Avatar sx={{ float: 'left', m: '1px' }}>
                                      {information.data.firstName?.charAt(0).toUpperCase()}{information.data.lastName?.charAt(0).toUpperCase()}
                                  </Avatar>
                                  <Typography sx={{ float: 'right', marginBottom: '20px' }} variant="h5" gutterBottom>
                                      Landlord Profile:
                                  </Typography>
                                  <hr />
                                  <Typography variant="body1">
                                      <strong>Name:</strong> {information.data.firstName} {information.data.lastName}
                                  </Typography>
                                  <Typography variant="body1">
                                      <strong>Email:</strong> {information.data.email}
                                  </Typography>
                                  <Typography variant="body1">
                                      <strong>Phone:</strong> {formatPhoneNumber(information.data.phoneNumber)}
                                  </Typography>
                              </Box>
                          </Paper>
                      ) : null}
  
                      <p class="heading">Menu Options</p>
                      <Link to="/landlord_dashboard/add_rentals"><button type="button" class="dashboard-button">Add Property</button></Link>
                      <Link to="/landlord_dashboard/receive_pay"><button type="button" class="dashboard-button">Received Payments</button></Link>
                      <Link to="/landlord_dashboard/track_late"><button type="button" class="dashboard-button">Track Late Payment</button></Link>
                  </section>
              </section>
          </div>
  
          <Dialog open={addTenantConfirmationOpen} onClose={handleConfirmationClose}>
              <DialogTitle>Confirmation</DialogTitle>
              <DialogContent>
                  <DialogContentText>
                      Are you sure you want to add a tenant?
                  </DialogContentText>
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleConfirmationClose} color="primary">
                      Cancel
                  </Button>
                  <Button onClick={handleConfirmationProceed} color="primary">
                      Add Tenant
                  </Button>
              </DialogActions>
          </Dialog>
  
          {/* Remove Tenant Dialog */}
          <Dialog open={removeTenantConfirmationOpen} onClose={handleConfirmationClose}>
              <DialogTitle>Confirmation</DialogTitle>
              <DialogContent>
                  <DialogContentText>
                      {confirmationType === 'addTenant'
                          ? 'Are you sure you want to add a tenant?'
                          : 'Are you sure you want to remove the tenant?'}
                  </DialogContentText>
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleConfirmationClose} color="primary">
                      Cancel
                  </Button>
                  <Button onClick={handleConfirmationProceed} color="primary">
                      {confirmationType === 'addTenant' ? 'Add Tenant' : 'Remove Tenant'}
                  </Button>
              </DialogActions>
          </Dialog>
  
      </body>
  );
  
}


export default LandlordDashboard;