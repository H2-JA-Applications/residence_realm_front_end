
import React, {useState} from 'react';
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
    const [date] = useState(new Date());
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
                    <Accordion sx={{ width: '600px'}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                            <Typography>Payment #1</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: '#f0f0f0'}}>
                            <Typography>Status: </Typography>
                            <Typography>Payment Type: </Typography>
                            <Typography>Date Paid: </Typography>
                            <Typography>Property ID: </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                            <Typography>Payment #2</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: '#f0f0f0'}}>
                            <Typography>Status: </Typography>
                            <Typography>Payment Type: </Typography>
                            <Typography>Date Paid: </Typography>
                            <Typography>Property ID: </Typography>
                        </AccordionDetails>
                    </Accordion>
                    </div>
                    <Link to="/tenant_dashboard"><button type = "button" class="dashboard-button">Back To Main Menu</button></Link>
                </section>
            </div>
            </div>
    </body>
  );
}


export default PaymentDetails;
