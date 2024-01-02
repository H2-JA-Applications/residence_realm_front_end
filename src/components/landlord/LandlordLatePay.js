import React, {useState, useEffect} from 'react';
import rrlogo from "../../images/rrlogo.png"
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
import PaymentService from '../../services/PaymentService';
import propertyService from '../../services/PropertyService';

const LatePayments = () => {
    const [properties, setProperties] = useState([]);
    const [receipts, setReceipts] = useState([]);
    const [expanded, setExpanded] = React.useState(null);
    const formatPhoneNumber = (phoneNumber) => {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      
        if (match) {
          return `(${match[1]}) ${match[2]} - ${match[3]}`;
        }
        return phoneNumber;
      };
      const payservice = new PaymentService();
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    let handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        window.location.href = "/";
      };
    useEffect(() => {
        propertyService.getLandlordProperties()
            .then(fetchedProperties => {
                setProperties(fetchedProperties);
            })
            .catch(error => {
                // Handle error
            });
        payservice.getPropertyReceipts()
            .then(fetchedReceipts => {
                console.log(fetchedReceipts)
                setReceipts(fetchedReceipts);
            })
            .catch(error => {
                // Handle error
            });
    }, []);
    return (
        <body>
            <Box class="navboard" sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar class="navbar">
                        <Link to="/landlord_dashboard"><Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo} /></Link>
                        <Typography class="title">Late Payments</Typography>
                        <Link onClick={handleLogout}>
                            <IconButton aria-label="delete" size="large" color='secondary'>
                                <LogoutIcon fontSize="inherit" />
                            </IconButton>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <div class="container">
                <section class="single-column">
                    {receipts.length === 0 ? (
                        <Typography style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>No Payments Currently Received</Typography>
                    ) : (
                        <div style={{ width: '700px', maxHeight: '700px', overflowY: 'auto' }}>
                            {receipts.map((receipt, index) => {
                                // Find the property associated with the receipt
                                const associatedProperty = properties.find(property => property.id === receipt.id && receipt.paymentStatus === "LATE");

                                if (associatedProperty) {
                                    // Find the first tenant in the property (assuming there's only one tenant per property in your data structure)
                                    const associatedTenant = associatedProperty.tenants[0];
                                    console.log('associatedProperty:', associatedProperty);
                                    //console.log('associatedTenant:', associatedTenant);
    
                                    return (
                                        <Accordion
                                            key={index}
                                            expanded={expanded === `panel${index}`}
                                            onChange={handleChange(`panel${index}`)}
                                            style={{ background: '#333', color: '#fff' }}
                                        >
                                            <AccordionSummary
                                                aria-controls={`panel${index}d-content`}
                                                id={`panel${index}d-header`}
                                                style={{ background: '#555' }}
                                            >
                                                <Typography style={{ fontWeight: 'bold' }}>Receipt ID: {receipt.id}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails style={{ background: '#444' }}>
                                                <Typography>
                                                    <p>Amount: {receipt.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                                                    <p>Date Paid: {new Date(receipt.datePaid).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC' })}</p>
                                                    <p>Payment Status: {receipt.paymentStatus}</p>
                                                    <hr style={{ borderTop: '1px solid #fff', margin: '10px 0' }} />
                                                    {/* Display Tenant Information */}
                                                    {associatedTenant && (
                                                        <div>
                                                            <Typography style={{ fontWeight: 'bold', marginBottom: '10px' }}>Tenant Information</Typography>
                                                            {/* Tenant Information Heading */}
                                                            <p>Name: {associatedTenant.firstName} {associatedTenant.lastName}</p>
                                                            <p>Email: {associatedTenant.email}</p>
                                                            <p>Phone #: {formatPhoneNumber(associatedTenant.phoneNumber)}</p>
                                                        </div>
                                                    )}
                                                    <hr style={{ borderTop: '1px solid #fff', margin: '10px 0' }} />
    
                                                    {/* Display Property Information */}
                                                    <div>
                                                        <Typography style={{ fontWeight: 'bold', marginBottom: '10px' }}>Property Information</Typography>
                                                        <p>Property Address: {associatedProperty.address}</p>
                                                        <p>Type: {associatedProperty.apartmentType}</p>
                                                        <p>Apt #: {associatedProperty.apartmentNumber}</p>
                                                    </div>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    );
                                }
                                return null; // Handle the case where no associated property is found
                            })}
                        </div>
                    )}
                    <Link to="/landlord_dashboard"><button type="button" class="dashboard-button">Back To Dashboard</button></Link>
                </section>
            </div>
        </body>
    );
}
export default LatePayments;
