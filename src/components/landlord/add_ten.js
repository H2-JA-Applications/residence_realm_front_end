import React, { useEffect, useState } from 'react';
import rrlogo from "../../images/rrlogo.png";
import { Link, useParams } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import UserInfo from '../../utils/userInfo';
import AuthService from '../../services/AuthService';
import propertyService from '../../services/PropertyService';
 
const AddTenant = () => {
  const [tenants, setTenants] = useState([]);
  let ten = useState('');
  const propertyID = localStorage.getItem("propertyID");
  const authService = new AuthService();
  
  
 
  let handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/";
  };
 
  useEffect(() => {
    authService.getTenantsNoProp().then(data => {
      setTenants(data);
    }).catch(error => {
      console.error('Error fetching tenants:', error);
    });
  }, []);
  function findtenant(tenants, id) {
    return tenants.filter(tenant => tenant.id == id)
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    propertyService.addTenanttoProperty(propertyID, ten).then( ()=> {
      alert("Tenant added")
      localStorage.removeItem("propertyID");
    }).catch(error => {
      console.error('Error adding tenants:', error);
    });
    
  }
 
  const handleDropdownChange = (event) => {
    const selectedTenantId = event.target.value;
    const selectedTenant = findtenant(tenants, selectedTenantId);
    
    const emailInput = document.getElementById('email');
    const phoneNumInput = document.getElementById('phoneNum');

    ten = selectedTenantId;
    console.log(ten)
    emailInput.value = '';
    phoneNumInput.value = '';
    

    if (selectedTenant) {
      emailInput.value = selectedTenant[0].email;
      phoneNumInput.value = selectedTenant[0].phoneNumber;

    }
  };
 
  return(
    <body>
        <Box class="navboard" sx={{ flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar class="navbar">
                <Link to="/landlord_dashboard"><Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo}/></Link>
                    <Typography class="title">Add Tenant</Typography>
                    <Link onClick={handleLogout}>
                    <IconButton aria-label="delete" size="large" color='secondary'>
                        <LogoutIcon fontSize="inherit"/>
                    </IconButton></Link>
                </Toolbar>
            </AppBar>
        </Box>
    <div class="container">
        <div class="panel">
            <form onSubmit= {handleSubmit}>
                <section class="single-column">
                <br />
                <br />
                <br />
                <br />
                    <section class="double-column">
                    {tenants ? (
                        <select name="tens" id="tens" value="" onChange={handleDropdownChange} class="input2">
                            <option value="">Select Tenant</option>
                            {tenants.map((tenant, index) => (
                                <option value={tenant.id} key={index}>{tenant.firstName} {tenant.lastName}</option>
                            ))}
                        </select>
                        ) : null}
                        <div class="input-form">
                        <input type="text" id="email" readOnly />
                        </div>
                        <div class="input-form">
                        <input type="text" id="phoneNum" readOnly />
                        <input type="submit" value="Submit" class="dashboard-button"/>
                        <Link to="/landlord_dashboard"><button type = "button" class="dashboard-button">Back To Dashboard</button></Link>
                        </div>
                    </section>
                </section>
            </form>
        </div>
    </div>
</body>
  );
};
 
export default AddTenant;