import React, {useState} from 'react';
import rrlogo from "../../images/rrlogo.png"
import { Link } from 'react-router-dom';
import { properties } from './properties';
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

    let handleRowClick = (clickedRowId) => {
        setSelectedRow((prevSelectedRow) =>
        prevSelectedRow === clickedRowId ? prevSelectedRow : clickedRowId
      );
    };

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
            <div class="container">
            <div class="panel">
                <section class="single-column">
                <table>
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Apartment #</th>
                            <th>Property Type</th>
                            <th>Rent Price</th>
                        </tr>
                    </thead>
                    <tbody>
                            {properties.map((property, index) => (
                                <tr
                                    class="row"
                                    key={index}
                                    onClick={() => handleRowClick(index+1)}
                                >
                                    <td>{property.address}</td>
                                    <td>{property.apartmentNum}</td>
                                    <td>{property.propertyType}</td>
                                    <td>{property.rent}</td>
                                </tr>
                            ))}
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