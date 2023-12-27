import React, {useState, useEffect} from 'react';
import PaymentService from '../../services/PaymentService';
import rrlogo from "../../images/rrlogo.png";
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 
const PaymentDetails = () => {
    const [payments, setPayments] = useState([]);
    const paymentService = new PaymentService();
 
    useEffect(() => {
        // Load payment history when the component mounts
        paymentService.viewPayment().then(data => {
            setPayments(data);
        }).catch(error => {
            console.error('Error fetching payment history:', error);
        });
    }, []); // Empty dependency array to run only once on mount
 
    return(
        <body>
            <Box class="navboard" sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar class="navbar">
                    <Link to="/tenant_dashboard"><Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo}/></Link>
                        <Typography class="title">Payment History</Typography>
                        <Link to="/">
                        <IconButton aria-label="delete" size="large" color='secondary'>
                            <LogoutIcon fontSize="inherit"/>
                        </IconButton></Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <div class="container">
            <div class = "panel">
                <section class="single-column">
                    <div class="accordion">
                    {payments.map((payment, index) => (
                                <Accordion key={index} sx={{ width: '500px' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id={`panel1a-header-${index}`}>
                                        <Typography>Payment #{index + 1}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: '#f0f0f0' }}>
                                        <Typography>Status: {payment.paymentStatus}</Typography>
                                        <Typography>Property: {payment.propertyId}</Typography>
                                        <Typography>Date of Payment: 
                                            {new Date(payment.datePaid).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                                            </Typography>
                                        <Typography>Amount Paid: {payment.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Typography>
                                        {/* Add more details as needed */}
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                    </div>
                    <Link to="/tenant_dashboard"><button type = "button" class="dashboard-button">Back To Main Menu</button></Link>
                </section>
            </div>
            </div>
    </body>
  );
}

export default PaymentDetails;