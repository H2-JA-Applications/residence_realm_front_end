import React, {useEffect, useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import { loginElements } from '../../utils/login_script';
import rrlogo from "../../images/rrlogo.png"
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import PaymentService from '../../services/PaymentService';

const Payment = () => {
    let [accountNum, setAccountNum] = useState('');
    let [routeNum, setRouteNum] = useState('');
    let [accountType, setAccType] = useState('');

    let [creditNum, setCreditNum] = useState('');
    let [csv, setCSV] = useState('');
    let [expire, setExpire] = useState('');

    let handleAccountNum = (e) => { setAccountNum(e.target.value) }
    let handleRouteNum = (e) => { setRouteNum(e.target.value) }
    let handleAccType = (e) => { setAccType(e.target.value) }

    let handleCreditNum = (e) => { setCreditNum(e.target.value) }
    let handleCSV = (e) => { setCSV(e.target.value) }
    let handleExpire = (e) => { setExpire(e.target.value) }

    let navigate = useNavigate();
    const paymentService = new PaymentService();

    let handleSubmit = (e) => {
        e.preventDefault();
        let pay = {accountNum:accountNum, routeNum:routeNum, accountType: accountType, type: "debit/credit" }
        paymentService.addPayment(pay).then(()=>{
            alert("payment processed");
            navigate("/landlord_dashboard")
        }, ()=>{
            alert("failed!");
        });

    }
    let handleSubmit2 = (e) => {
        e.preventDefault();
        let pay = {creditNum:creditNum, csv:csv, expire: expire, type:"ach/e_check" }
        paymentService.addPayment(pay).then(()=>{
            alert("payment processed");
            navigate("/landlord_dashboard")
        }, ()=>{
            alert("failed!");
        });

    }

    return(
        <body>
            <Box class="navboard" sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar class="navbar">
                    <Link to="/tenant_dashboard"><Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo}/></Link>
                        <Typography class="title">Make Payment</Typography>
                        <Link to="/">
                        <IconButton aria-label="delete" size="large" color='secondary'>
                            <LogoutIcon fontSize="inherit"/>
                        </IconButton></Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <div class="forms">
            <div class="form-wrapper is-active">
                <button type="button" class="switcher switcher-login">
                    Debit/Credit
                    <span class="underline"></span>
                </button>
                
                <form onSubmit={handleSubmit}  class="form form-login">
                    <section class="single-column">
                        <label>Debit/Credit Info:</label>
                        <div class="input-form">
                            <input class="input" onChange = {handleCreditNum} value = {creditNum} id="cardnumber" type="text" required name="cardnumber"/>
                            <label class="label" for="cardnumber">Card Number</label>
                        </div>
                        <div class="input-form">
                            <input class="input" onChange = {handleCSV} value = {csv} id="csv" type="password" required name="csv"/>
                            <label class="label" for="csv">CSV</label>
                        </div>
                        <div class="input-form">
                            <input class="input" onChange = {handleExpire} value = {expire} id="expire" type="text" required name="expire"/>
                            <label class="label" for="expire">Expiration Date</label>
                        </div>
                        <input type="submit" value="Submit" class="btn-signup"/>
                        <Link to="/tenant_dashboard"><button type = "button" class="dashboard-button"> Back To Main Menu</button></Link>
                    </section>
                </form>
            </div>

            <div class="form-wrapper">
                <button type="button" class="switcher switcher-signup">
                    E-Check/ACH
                    <span class="underline"></span>
                </button>
                <form onSubmit={handleSubmit2} class="form form-signup">
                    <section class="single-column">
                        <label>E-Check/ACH Info:</label>
                        <div class="input-form">
                            <input class="input" onChange = {handleAccountNum} value = {accountNum} id="accounting" type="password" required name="accounting"/>
                            <label class="label" for="accounting">Account Number</label>
                        </div>
                        <div class="input-form">
                            <input class="input" onChange = {handleRouteNum} value = {routeNum} id="routingnumber" type="text" required name="routingnumber"/>
                            <label class="label" for="routingnumber">Routing Number</label>
                        </div>
                        <select name="accountType" onChange = {handleAccType} value = {accountType} id="accountType" selectedIndex="-1" class="input2">
                            <option value="">Select Account Type</option>
                            <option value="checking">Checking</option>
                            <option value="savings">Savings</option>
                        </select>
                        <input type="submit" value="Submit" class="btn-signup"/>
                        <Link to="/tenant_dashboard"><button type = "button" class="dashboard-button"> Back To Main Menu</button></Link>
                    </section>
                </form>
            </div>
        </div>

            
        </body>
  );
}

export default Payment;

/* <div class="panel">
                <section class="single-column">
                    <select name="role" id="role" selectedIndex="-1" class="input2">
                        <option value="">Select a Payment Type</option>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                        <option value="ach">ACH</option>
                        <option value="echeck">ECheck</option>
                    </select>
                <section class="double-column">
                    <div class="input-form">
                        <input class="input" id="accounting/cardnumber" type="password" required name="accounting/cardnumber"/>
                        <label class="label" for="accounting/cardnumber">Account/Card Number</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="csv/routingnumber" type="text" required name="csv/routingnumber"/>
                        <label class="label" for="csv/routingnumber">CSV/Routing Number</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="expire" type="text" required name="expire"/>
                        <label class="label" for="expire">Expiration Date</label>
                    </div>
                    <select name="role" id="role" selectedIndex="-1" class="input2">
                        <option value="">Select Account Type</option>
                        <option value="checking">Checking</option>
                        <option value="savings">Savings</option>
                    </select>
                </section>
                
                    <button type = "button" class="dashboard-button">Make Payment</button>
                    <Link to="/tenant_dashboard"><button type = "button" class="dashboard-button">Back To Dashboard</button></Link>
                </section>
            </div> */
