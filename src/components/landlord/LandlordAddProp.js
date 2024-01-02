import React, {useState} from 'react';
import rrlogo from "../../images/rrlogo.png"
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import PropertyService from '../../services/PropertyService';
const AddProperty = () => {

    let [address, setAddress] = useState('');
    let [rent, setRent] = useState('');
    let [apartment_type, setPropertyType] = useState('');
    let [due_date, setDate] = useState('');
    let [apt_num, setApt] = useState('');

    let handleAddress = (e) => { setAddress(e.target.value) }
    let handleRent = (e) => { setRent(e.target.value) }
    let handlePropertyType = (e) => { setPropertyType(e.target.value) }
    let handleDate = (e) => { setDate(e.target.value) }
    let handleApt = (e) => { setApt(e.target.value) }


    let navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();
        let property = {address:address, rent: rent, apartmentNumber: apt_num, apartmentType: apartment_type, dueDate: due_date}
        PropertyService.addProperty(property).then(()=>{
            alert("Property added");
            navigate("/landlord_dashboard")
        }, ()=>{
            alert("Property failed!");
        });    
    }
    return(
        <body>
            <Box class="navboard" sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar class="navbar">
                    <Link to="/landlord_dashboard"><Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo}/></Link>
                        <Typography class="title">Land Dashboard</Typography>
                        <Link to="/">
                        <IconButton aria-label="delete" size="large" color='secondary'>
                            <LogoutIcon fontSize="inherit"/>
                        </IconButton></Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <div class="container">
            <div class="panel">
            <form onSubmit={handleSubmit}>
                <section class="single-column">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                <section class="double-column">
                    <div class="input-form">
                        <input class="input" onChange = {handleAddress} value = {address} id="l_address" type="text" required name="l_address"/>
                        <label class="label" for="l_address">Address</label>
                    </div>
                    <div class="input-form">
                        <input class="input" onChange = {handleRent} value = {rent} id="rent_ammount" type="text" required name="rent_ammount"/>
                        <label class="label" for="rent_ammount">Rent</label>
                    </div>
                    <div class="input-form">
                        <input class="input" onChange = {handleDate} value = {due_date} id="due_date" type="text" required name="due_date"/>
                        <label class="label" for="due_date">Due Date</label>
                    </div>
                    <select name="role" onChange = {handlePropertyType} value = {apartment_type} id="property_type" selectedIndex="-1" class="input2">
                        <option value="">Select Property Type</option>
                        <option value="apartment">Apartment</option>
                        <option value="condo">Condo</option>
                        <option value="house">House</option>
                    </select>
                    <div class="input-form">
                            <input class="input" onChange = {handleApt} value = {apt_num} id="apt_num" type="text" required name="apt_num"/>
                            <label class="label" for="apt_num">Apt Number</label>
                    </div>
                    </section>
                        <input type="submit" value="Submit" class="dashboard-button"/>
                    <Link to="/landlord_dashboard"><button type = "button" class="dashboard-button">Back To Dashboard</button></Link>
                </section>
                </form>
            </div>
            </div>
        </body>
    );
}

export default AddProperty;
