import React, {useState} from 'react';
import rrlogo from "../../images/rrlogo.png"
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

const Receipts = () => {
    const [date] = useState(new Date());
    return(
        <body>
            <Box class="navboard" sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar class="navbar">
                    <Link to="/tenant_dashboard"><Avatar class="small-logo" alt="Residence Realm Logo" src={rrlogo}/></Link>
                        <Typography class="title">Choose Rental</Typography>
                        <Link to="/">
                        <IconButton aria-label="delete" size="large" color='secondary'>
                            <LogoutIcon fontSize="inherit"/>
                        </IconButton></Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <div class="container">
                <div class = "panel">
                    <div class = "single-column">
                        <Box
                    sx={{
                        display: 'flex', justifyContent: 'center',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 0,
                        p: '50px',
                        width: 600,
                        height: 'auto',
                        },
                    }}
                    >
                            <Paper elevation={3}>
                                <Typography>
                                    <p class="heading">Rental Receipt: </p>
                                    <Divider sx={{ marginY: 1 }} />
                                    <section class="single-column">Address: <br /> 
                                        Apartment Number: <br />
                                        Apartment Type: <br />
                                        <br />
                                        Rent Price: <br />
                                        Status of Payment: <br />
                                        Payment Type: <br />
                                        Due Date: <br />
                                        Date Paid: <br />
                                    </section>
                                </Typography>
                            </Paper>
                        </Box>
                        <Link to="/tenant_dashboard"><button type = "button" class="dashboard-button"> Back To Main Menu</button></Link>
                    </div>
                </div>
            </div>
    </body>
  );
}


export default Receipts;
